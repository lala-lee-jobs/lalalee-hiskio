<template>
  <div>
    <div v-for="cart in carts" :key="cart.id">
      <cart-item v-bind="cart"></cart-item>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';
export default {
  components: {CartItem},
  props: {
    carts: {
      type: Array,
      default: () => [],
    },    
  },
}
</script>