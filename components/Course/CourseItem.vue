<template>
  <li class="border">
    <div>
      <img :src="image">
    </div>
    <ul class="w-full flex justify-end">
      <li @click="addCourseInCart">加入購物車</li>
    </ul>
    <div>
      <h3>{{title}}</h3>
      <course-lecturer v-bind="lecturer">
      </course-lecturer>
    </div>
  </li>
</template>
<script>
import { mapActions } from 'vuex';
import CourseLecturer from './CourseLecturer.vue';
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
  methods: {
    ...mapActions('Carts', [
      'vxAddCourse',
    ]),
    addCourseInCart() {
      const {id, coupon} = this.$attrs;
      this.vxAddCourse({id, coupon});
    },
  },
}
</script>