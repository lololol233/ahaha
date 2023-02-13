<style scoped>
/* table{
  width: 80rem;
  background-color: white;
  margin: auto;
  border-radius: 10px;
  outline-style: none;
  border: 1px solid gray;
  border-spacing: 0;
} */
/* td{
  border: 1px solid gray;
  border-spacing: 0;

} */
.col-10{
  margin: auto;
}
</style>

<template>

<div id="orders">
    <div class="row">
        <div class="col-12">
            <h3 class="title">訂單</h3>
        </div>
        <!-- Quasar範例 -->
        <div class="col-10">
        <q-table :rows="orders" :columns="columns">
        </q-table>
      </div>
        <!-- 老師範例 -->
        <!-- <div class="col-12">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>日期</th>
                        <th>金額</th>
                        <th>商品</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order._id">
                        <td>{{ order._id }}</td>
                        <td>{{ new Date(order.date).toLocaleDateString() }}</td>
                        <td>{{ order.totalPrice }}</td>
                        <td>
                            <ul>
                                <li v-for="product in order.products" :key="product._id">{{ product.quantity + ' 個 ' + product.p_id.name }}</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> -->
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
    name: 'id',
    label: 'ID',
    field: orders => orders._id,
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
    name: 'product',
    label: '商品',
    field: orders => orders.products[0],
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
