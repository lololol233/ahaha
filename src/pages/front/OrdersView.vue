<style scoped>
.col-10{
  margin: auto;
}
</style>

<template>

<div id="orders">
    <div class="row">
        <div class="col-12">
            <h3 class="title">Orders</h3>
        </div>
        <!-- Quasar範例 -->
        <div class="col-10">
        <q-table :rows="orders" :columns="columns">
          <template v-slot:body-cell-name="props">
            <q-td style="text-align: center; ">
              <ul>
                <li v-for="product in props.row.products" :key="product._id" style="list-style: none;">
                    <p>{{product.quantity + ' 個 ' + product.p_id.name}}
                    </p>
                </li>
              </ul>
        </q-td>
    </template>
        </q-table>
      </div>
    </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'

// 範例
const columns = [
  {
    name: 'date',
    label: 'Date',
    field: orders => new Date(orders.date).toLocaleDateString(),
    align: 'center'
  },
  {
    name: 'price',
    label: 'Total Price',
    field: orders => orders.totalPrice,
    align: 'center'
  },
  {
    name: 'name',
    label: 'Product Title',
    field: orders => orders,
    align: 'center'
  }
]

const orders = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      return order
    }))
    console.log(orders)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
})()
</script>
