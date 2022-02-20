<template>
  <div v-if="hasCartItems" class="mx-auto max-w-[1170px] p-15px">
    <div class="text-2xl">購物車</div>
    <div class="flex justify-between">
      <cart-list :carts="vxCartsItems"></cart-list>
      <carts-summary></carts-summary>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { isEmpty } from 'lodash';
import CartsSummary from './CartsSummary.vue';
import CartList from './CartList.vue';
export default {
  components: { CartList, CartsSummary },
  computed: {
    ...mapGetters('Carts', ['vxCartsItems']),
    hasCartItems() {
      return !isEmpty(this.vxCartsItems);
    },
  },
  async mounted() {
    const data = await this.vxGetExistCarts();
    console.log('mounted', data);
  },
  methods: {
    ...mapActions('Carts', [
      'vxGetExistCarts'
    ]),
  },
}
</script>