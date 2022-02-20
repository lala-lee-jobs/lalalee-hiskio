<template>
  <div class="px-3 lg:px-0">
    <div class="flex items-center justify-between h-40px">
      <div class="hidden lg:flex">第幾天</div>
      <div>已募資{{percentage}}%</div>
    </div>
    <div class="w-full flex items-center py-1">
      <course-progress :percentage="percentage"></course-progress>
    </div>
    <div class="w-full flex items-center py-1">
      <div class="text-sm mr-1 lg:text-lg">{{$currency($attrs.price, true)}}</div>
      <del class="text-sm text-gray-500">{{$currency($attrs.fixedPrice, true)}}</del>
    </div>
  </div>
</template>

<script>
import CourseProgress from './CourseProgress.vue'
export default {
  components: { CourseProgress },
  inheritAttrs: false,
  computed: {
    percentage() {
      const {consumers, fundraisingTickets} = this.$attrs;
      if  (consumers && fundraisingTickets) {
        const calc = (consumers / fundraisingTickets) * 100;
        return parseInt(calc);
      }
      return 0;
    },
  },
}
</script>

<style scoped>

</style>