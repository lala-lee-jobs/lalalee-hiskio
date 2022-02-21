import CourseDetail from './CourseDetail.vue';
import mockdata from '~/mocks/courses/fundraising';

export default {
  title: 'CourseDetail'
}

const Template = (args) => ({
  props: Object.keys(args),
  components: { CourseDetail },
  template: '<course-detail class="w-full order-1 lg:order-2" v-bind="$props"/>',
});

export const Default = Template.bind({});
const [{price, fixedPrice, consumers, fundraisingTickets}] = mockdata;

Default.args = {price, fixedPrice, consumers, fundraisingTickets};