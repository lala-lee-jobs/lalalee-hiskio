<template>
  <div v-if="fundraising" class="mx-auto max-w-[1170px] p-15px">
    <div class="text-2xl">募資課程</div>
    <ul class="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
      <template  v-for="course in vxFundraising">
        <course-item
          :key="course.id" 
          :lecturer="lecturer(course)"
          :detail="detail(course)"
          :image="course.image"
          :title="course.title"
        >
        </course-item>
      </template>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { isEmpty, get } from 'lodash';
export default {
  props: {
    fundraising: Boolean,
  },
  computed: {
    ...mapState('Courses', { vxFundraising: 'fundraising' }),
    lecturer() {
      return (course) => {
        const lecturers = get(course, 'lecturers', []);
        if (!isEmpty(lecturers)) {
          const [lecturer] = course.lecturers;
          return lecturer;
        }
        return null;
      };
    },
    detail() {
      return (course) => {
        if (course) {
          const {fundraising_tickets: fundraisingTickets, consumers,fixed_price:fixedPrice, price} = course;
          return {
            fundraisingTickets,
            consumers,
            fixedPrice,
            price,
          };
        }
        return null;
      };
    },
  }
}
</script>