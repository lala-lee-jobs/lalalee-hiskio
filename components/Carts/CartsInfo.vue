<template>
  <div v-if="hasCartItems" class="mx-auto max-w-[1170px] p-15px">
    <div class="flex flex-wrap justify-between">
      <carts-items :carts="vxCartsItems" class="w-full lg:w-2/3 mb-5"/>
      <carts-summary class="w-full lg:w-1/3"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { isEmpty } from 'lodash';
import CartsSummary from './CartsSummary.vue';
import CartsItems from './CartsItems.vue';
export default {
  components: { CartsItems, CartsSummary },
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