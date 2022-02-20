<template>
  <div>
    <div class="text-2xl">購物車</div>
    <div class="flex justify-between">
      <cart-list :carts="vxCartsItems"></cart-list>
      <carts-summary></carts-summary>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartsSummary from './CartsSummary.vue';
import CartList from './CartList.vue';
export default {
  components: { CartList, CartsSummary },
  computed: {
    ...mapGetters('Carts', ['vxCartsItems']),
  },
  watch: {
    async vxCartsItems() {
      await this.vxGetExistCarts();
    },
  },
  async mounted() {
    console.log('mounted');
    await this.vxGetExistCarts();
  },
  methods: {
    ...mapActions('Carts', [
      'vxGetExistCarts'
    ]),
  },
}
</script>