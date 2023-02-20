<style scoped>
.col-10{
  margin: auto;
}
</style>

<template>
<div id="orders"></div>
<div class="row">
  <div class="col-12">
    <h3 class="title">Orders Management</h3>
  </div>
<!-- Quasar範例 -->
    <div class="col-10">
        <q-table :rows="orders" :columns="columns">
          <template v-slot:body-cell-name="props">
            <q-td>
              <ul>
                <li v-for="product in props.row.products" :key="product._id">
                    <p>{{product.quantity + ' 個 ' + product.p_id.name}}
                    </p>
                </li>
              </ul>
        </q-td>
    </template>
        </q-table>
    </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'
const columns = [
  {
    name: 'id',
    label: 'ID',
    field: orders => orders._id,
    align: 'center'
  },
  {
    name: 'u_id',
    label: 'U_ID',
    field: orders => orders.u_id.account,
    align: 'center'
  },
  {
    name: 'date',
    label: '日期',
    field: orders => new Date(orders.date).toLocaleDateString(),
    align: 'center'
  },
  {
    name: 'price',
    label: '金額',
    field: orders => orders.totalPrice,
    align: 'center'
  },
  {
    name: 'name',
    label: '商品',
    field: orders => orders,
    align: 'center'
  }
]
const orders = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      return order
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
})()
</script>
