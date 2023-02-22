<style scoped>
.col-10{
  margin: auto;
}
.slot{
  text-align: center;
}
</style>

<template>
<div id="cart">
  <div class="row">
    <div class="col-12">
      <h3 class="title">Cart</h3>
    </div>
      <!-- 雅嵐範例 -->
      <div class="col-10">
        <q-table :rows="cart" :columns="columns" row-key="_id" >
          <template v-slot:body-cell-image="props">
            <q-td class="slot">
              <img :src="props.row.p_id.image" style="height: 100px; width: 100px" />
            </q-td>
          </template>
          <template v-slot:body-cell-minus="props">
              <q-td class="slot">
                <q-btn @click="updateCart(cart.findIndex(item=&gt;item._id === props.row._id), -1)">-</q-btn>
              </q-td>
          </template>
          <template v-slot:body-cell-add="props">
              <q-td class="slot">
                <q-btn @click="updateCart(cart.findIndex(item=&gt;item._id === props.row._id), 1)">+</q-btn>
              </q-td>
          </template>
          <template v-slot:body-cell-delete="props">
              <q-td class="slot">
                <q-btn color="red" @click="updateCart(cart.findIndex(item=&gt;item._id === props.row._id), parseInt(props.row.quantity*-1))">Delete</q-btn>
              </q-td>
          </template>
        </q-table>
      </div>
    <div class="col-12 text-center">
      <!-- <q-btn color="green" :disabled="!canCheckout" @click="onCheckoutBtnClick">
        結帳
        <td class="text-center" colspan="6">沒有商品</td>
      </q-btn> -->
      <div class="col-12 text-center" style="margin: 2rem 0">
        <p>Total Price {{ totalPrice }}</p>
        <q-btn color="accent" :disabled="!canCheckout" @click="onCheckoutBtnClick">Checkout</q-btn>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/boot/axios'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const columns = [
  {
    name: 'image',
    label: 'Image',
    field: cart => cart,
    align: 'center'
  },
  {
    name: 'name',
    label: 'Product Title',
    field: cart => cart.p_id.name,
    align: 'center'
  },
  {
    name: 'price',
    label: 'Price',
    field: cart => cart.p_id.price,
    align: 'center'
  },
  {
    name: 'minus',
    label: '',
    field: cart => cart,
    align: 'center'
  },
  {
    name: 'edit',
    label: 'Quantity',
    field: cart => cart.quantity,
    align: 'center'
  },
  {
    name: 'add',
    label: '',
    field: cart => cart,
    align: 'center'
  },
  {
    name: 'price-total',
    label: 'Total Price',
    field: cart => cart.quantity * cart.p_id.price,
    align: 'center'
  },
  {
    name: 'delete',
    label: 'Delete',
    field: cart => cart,
    align: 'center'
  }
]
const router = useRouter()

const user = useUserStore()
const { editCart, checkout } = user

const cart = reactive([])

const updateCart = async (idx, quantity) => {
  await editCart({ _id: cart[idx].p_id._id, quantity })
  cart[idx].quantity += quantity
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1)
  }
}

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/orders')
}

const totalPrice = computed(() => {
  return cart.reduce((total, current) => {
    return total + (current.p_id.price * current.quantity)
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(product => {
    return !product.p_id.sell
  })
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得購物車失敗'
    })
  }
})()
</script>
