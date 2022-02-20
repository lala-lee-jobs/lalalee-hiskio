<template>
  <div>
    <h2 class="mb-5 text-2xl">購物車</h2>
    <div class="grid grid-cols-12 gap-y-3 ">
      <div class="hidden lg:flex lg:justify-start lg:col-span-6">項目</div>
      <div class="hidden lg:flex lg:justify-start lg:col-span-3">售價</div>
      <div class="hidden lg:flex lg:justify-start lg:col-span-2">結帳金額</div>
      <div class="hidden lg:flex lg:justify-start lg:col-span-1"></div>
      <template v-for="cart in carts">
        <div :key="colKey('image',cart.id)" class="col-span-10 lg:col-span-6 w-full flex justify-start">
          <div class="w-1/5 lg:w-1/3 flex items-center">
            <img class="h-[34px] md:h-[68px]" :src="cart.image" />
          </div>
          <div class="w-4/5 lg:w-2/3 px-[12px] flex items-center">
            <div class="w-full line-clamp-3 text-md">{{cart.name}}</div>
          </div>
        </div>
        <div
:key="colKey('action',cart.id)" 
          class="col-span-2 flex lg:hidden items-center justify-end"
          @click="removeItemInCart(cart.id)"
        >
          <img src="~/assets/icons/trash.svg" />
        </div>
        <div :key="colKey('discount',cart.id)" class="col-span-10 lg:col-span-3 flex items-center justify-start">
          <span class="text-gray-600">{{$currency(cart.subtotal)}}</span>
        </div>
        <div :key="colKey('total',cart.id)" class="col-span-2 lg:col-span-2 flex items-center justify-end lg:justify-start">{{$currency(cart.total)}}</div>
        <div 
          :key="colKey('lg-action',cart.id)"
          class="col-span-1 hidden lg:flex items-center" 
          @click="removeItemInCart(cart.id)"
        >
          <img src="~/assets/icons/trash.svg" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    carts: {
      type: Array,
      default: () => [],
    },    
  },
  computed: {
    colKey() {
      return (colname, id) => {
        return `${colname}-${id}`;
      };
    },
  },
  methods: {
    ...mapActions('Carts', [
      'vxRemoveItemInCart',
    ]),
    removeItemInCart(id) {
      console.log('removeItemInCart');
      this.vxRemoveItemInCart(id);
    }
  }
}
</script>