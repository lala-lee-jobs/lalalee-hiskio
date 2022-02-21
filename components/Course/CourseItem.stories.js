// CourseItem.stories.js
import CourseItem from './CourseItem.vue';
import mockdata from '~/mocks/courses/fundraising';

export default {
  title: 'CourseItem',
  component: CourseItem,
};

export const OneCourseItem = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CourseItem,},
  template: 
  `
  <ul class="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
    <course-item v-bind="$props"></course-item>
  </ul>
  `,
});

const [oneCourseItem] = mockdata;
OneCourseItem.args = oneCourseItem;