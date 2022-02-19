<template>
  <div class="flex">
    <div @click="removeItemInCart(id)">X</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>{{name}}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  methods: {
    ...mapActions('Carts', [
      'vxRemoveItemInCart',
    ]),
    removeItemInCart(id) {
      this.vxRemoveItemInCart(id);
    }
  }
}
</script>