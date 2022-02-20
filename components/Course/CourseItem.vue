<template>
  <li class="mb-[12px]">
    <a class="block rounded-xl shadow">
      <div class="flex flex-wrap w-full lg:flex-col">
        <div class="relative flex w-auto lg:w-full order-1 p-3 lg:p-0 lg:order-1">
          <div class="w-[140px] h-[76px] lg:w-[280px] lg:h-[150px] bg-cover bg-center rounded-xl lg:rounded-none" :style="courseCoverStyles"></div>
          <div class="hidden lg:flex items-end justify-end absolute bottom-0 w-full p-1">
            <div class="w-23px h-23px mr-1">
              <img src="~/assets/icons/bookmark.svg" />
            </div>
            <div class="w-23px h-23px mr-1" @click="addCourseInCart">
              <img src="~/assets/icons/add-cart.svg" />
            </div>
          </div>
        </div>
        <div class="flex w-full order-3 lg:flex-col p-3 lg:order-2">
          <h3 class="text-sm line-clamp-1 lg:text-xl lg:line-clamp-2">{{title}}</h3>
        </div>
        <div class="flex w-auto order-2 lg:flex-col lg:w-full lg:order-3 p-10px">
          <course-lecturer class="order-2 lg:order-1" v-bind="lecturer" />
          <course-detail class="w-full order-1 lg:order-2" v-bind="detail"/>
        </div>
      </div>
    </a>
  </li>
</template>
<script>
import { mapActions } from 'vuex';
import CourseDetail from './CourseDetail.vue';
import CourseLecturer from './CourseLecturer.vue';
export default {
  components: { CourseLecturer, CourseDetail },
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
    },
    detail: {
      type: Object,
      default: () => {},      
    }
  },
  computed: {
    courseCoverStyles() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
  },
  methods: {
    ...mapActions('Carts', [
      'vxAddCourse',
    ]),
    addCourseInCart() {
      console.log('addCourseInCart');
      const {id, coupon} = this.$attrs;
      this.vxAddCourse({id, coupon});
    },
  },
}
</script>
<style scoped>
</style>