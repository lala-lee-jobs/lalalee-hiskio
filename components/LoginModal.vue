<template>
  <div v-if="open" class="fixed flex justify-center inset-0 bg-black opacity-70">
    <div class="w-1/2 h-1/2 bg-white text-center m-10% p-3 rounded">
      <div class="relative">
        <div class="absolute top-0 right-0" @click="$emit('login-modal-close')">
          <img src="~/assets/icons/close.svg" />
        </div>
        <button @click="loginHandler">登入</button>
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
  methods: {
    ...mapActions('Member', [
      'login',
    ]),
    loginHandler() {
      this.login();
      this.$emit('login-modal-close');
    },
  },
}
</script>
<style scoped>
</style>