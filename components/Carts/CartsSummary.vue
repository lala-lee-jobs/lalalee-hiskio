<template>
  <div class="w-full">
    <h2 class="mb-5 text-2xl">小計</h2>
    <div class="pt-13px px-3 pb-5 bg-white rounded-10px">
      <div class="mb-5">
        <label for="coupon-code" class="block mb-3 text-gray-600">輸入折扣代碼</label>
        <div class="w-full flex">
          <input id="coupon-code" class="flex-grow mr-2 h-10 border border-gray-300 rounded" type="text" />
          <button class="flex-shrink-0  w-[76px] h-10 bg-[#FFE6E6] text-red-500 rounded">確定</button>
        </div>        
      </div>
      <button class="flex items-center text-[18px] leading-5 text-gray-700 font-medium hover:text-gray-600 focus:text-gray-700">
        <div class="mr-1 underline">選擇抵用券</div>
        <img src="~/assets/icons/arrow-down.svg" />
      </button>
      <div class="flex justify-between mt-5 mb-4 pt-5 border-t-[1px] border-gray-400">
        <div class="flex-shrink-0 text-gray-600">金額</div>
        <div class="text-gray-700">
          <span class="text-sm">$10,800</span>  
        </div>
      </div>
      <div class="mb-5 text-right text-[32px] text-gray-900 font-medium">
        <span class="text-28px leading-8">$</span>9,860
      </div>
      <button class="block mb-3 w-full h-10 bg-red-500 text-white rounded">前往結帳</button>
      <p class="text-xs leading-5 text-gray-600">
        點擊上方按鈕即表示您已閱讀並同意「 HiSKIO購買與退費政策」
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('Carts', { vxSubtotal: 'subtotal', vxTotal: 'total' }),
  },
}
</script>