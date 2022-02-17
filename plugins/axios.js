import CoursesAPI from '@/api/Courses';

export default (nuxtContext, inject) => {
  inject('CoursesAPI', CoursesAPI());
};