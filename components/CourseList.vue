<template>
  <div>
    <div v-if="fundraising">
      <div class="text-2xl">募資課程</div>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      <template v-for="course in vxFundraising">
        <li :key="course.id" class="border">
          <div>
            <img :src="course.image">
          </div>
          <div>
            <h3>{{course.title}}</h3>
            <div v-if="lecturer(course)" class="flex">
              <img width="32" :src="lecturer(course).avatar" />
              <span>{{lecturer(course).username}}</span>
            </div>
          </div>
        </li>
      </template>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  props: {
    fundraising: Boolean,
  },
  computed: {
    ...mapState('Courses', { vxFundraising: 'fundraising' }),
    lecturer() {
      return (course) => {
        if (course && course.lecturers && course.lecturers.length > 0) {
          const [lecturer] = course.lecturers;
          return lecturer;
        }
        return null;
      };
    },
  },
}
</script>