<template>
  <div v-if="open" class="fixed w-full h-screen top-5 bg-white">
    <ul class="p-3">
      <li>探索課程</li>
      <li>企業方案</li>
      <li>登入</li>
      <li>註冊</li>
    </ul>  
  </div>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>