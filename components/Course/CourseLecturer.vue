<template>
  <div class="flex items-start justify-between w-40px h-40px lg:items-center lg:w-full lg:justify-start">
    <div class="border rounded-full bg-cover w-40px h-40px lg:mr-5px" :style="lectureAvatarStyles"></div>
    <p class="hidden text-right text-xs lg:flex lg:text-base">{{$attrs.username}}</p>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  computed: {
    lectureAvatarStyles() {
      return {
        backgroundImage: `url(${this.$attrs.avatar})`,
      };
    },
  },
}
</script>