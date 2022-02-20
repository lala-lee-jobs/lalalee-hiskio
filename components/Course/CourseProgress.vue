<template>
  <div class="w-full bg-gray-200 h-1 rounded-xl">
    <div div class="bg-red-600 h-1 rounded-xl" :style="percentageStyles"></div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0,
    },    
  },
  computed: {
    percentageStyles() {
      const percentage = (this.percentage < 100) ? this.percentage : 100;
      return {
        width: `${percentage}%`
      };
    },    
  }
}
</script>

<style scoped>

</style>