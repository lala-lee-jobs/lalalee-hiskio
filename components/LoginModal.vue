<template>
  <div
    v-if="open"
    class="fixed flex items-center justify-center inset-0 bg-gray-700"
  >
    <div class="w-1/2 h-auto bg-white text-center m-10% p-3 rounded">
      <div class="relative">
        <div
          class="absolute top-[11px] right-[9px] w-40px h-40px text-xl"
          @click="$emit('login-modal-close')"
        >
          <img src="~/assets/icons/close.svg" />
        </div>
        <div data-v-7f398b4f="" class="w-full overflow-hidden">
          <div class="flex justify-center">
            <button
              class="text-[32px] leading-[37px] w-[160px] text-center font-black text-[#178FAC] pt-5 pb-[8px] transition-colors float-left"
            >
              登入
            </button>
            <button
              class="text-[32px] leading-[37px] w-[160px] text-center font-black text-gray-400 pt-5 pb-[8px] transition-colors float-right"
            >
              註冊
            </button>
          </div>
          <div class="clear-both w-full mx-auto bg-white max-w-[320px]">
            <span
              class="block transition-transform duration-150 dash bg-[#178FAC] w-[80px] h-[4px] left-0 text-[#178FAC] transform translate-x-[40px]"
            ></span>
          </div>
        </div>
        <p class="mt-[24px] mb-[21px] text-center text-base text-gray-700">使用 HiSKIO ID 登入</p>
        <ul>
          <li class="relative">
            <input v-model="loginForm.account" type="email" placeholder="請輸入 HiSKIO ID" class="input-text" />
            <p class="text-xs text-red-4"></p>
          </li>
          <li class="relative mt-[8px]">
            <input v-model="loginForm.password" type="password" placeholder="請輸入登入密碼" class="input-text" />
            <p class="text-xs text-red-4"></p>
          </li>          
        </ul>
        <button class="default-solid-btn mx-auto mt-[28px] w-[320px] py-[9px]" @click="loginHandler">登入</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      loginForm: {
        account: '',
        password: '',
        confirm: true,
      },
    };
  },
  methods: {
    ...mapActions('Member', ['vxLogin']),
    loginHandler() {
      this.vxLogin(this.loginForm);
      this.$emit('login-modal-close');
    },
  },
};
</script>
<style scoped>
input-text.error {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(226,82,82,var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(226,82,82,var(--tw-text-opacity));
}
.input-text {
  width: 100%;
  border-radius: 4px;
  --tw-bg-opacity: 1;
  background-color: rgba(250,250,250,var(--tw-bg-opacity));
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 3rem;
  font-size: .875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(140,140,140,var(--tw-text-opacity));
  outline: 2px solid transparent;
  outline-offset: 2px;  
}
.default-solid-btn {
  display: flex;
  height: 40px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  --tw-bg-opacity: 1;
  background-color: rgba(23,143,172,var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255,255,255,var(--tw-text-opacity));
}
</style>
