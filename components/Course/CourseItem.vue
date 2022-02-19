<template>
  <li class="border">
    <div>
      <img :src="image">
    </div>
    <ul class="w-full flex justify-end">
      <li>加入購物車</li>
    </ul>
    <div>
      <h3>{{title}}</h3>
      <course-lecturer v-bind="lecturer">
      </course-lecturer>
    </div>
  </li>
</template>
<script>
import CourseLecturer from './CourseLecturer.vue'
export default {
  components: { CourseLecturer },
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    lecturer: {
      type: Object,
      default: () => {},      
    }
  },
}
</script>