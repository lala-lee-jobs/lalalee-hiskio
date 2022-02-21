import CourseLecturer from './CourseLecturer.vue';
import mockdata from '~/mocks/courses/fundraising';

export default {
  title: 'CourseLecturer'
}

const Template = (args) => ({
  props: Object.keys(args),
  components: { CourseLecturer },
  template: '<course-lecturer class="order-2 lg:order-1" v-bind="$props" />',
});

export const Default = Template.bind({});
const [course] = mockdata;
const [lecture] = course.lectures;
Default.args = lecture;