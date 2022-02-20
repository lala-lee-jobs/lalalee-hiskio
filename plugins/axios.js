import CoursesAPI from '@/api/Courses';
import AuthAPI from '@/api/Auth';
import MemberAPI from '@/api/Member';
import CartsAPI from '@/api/Carts';

export default (nuxtContext, inject) => {
  inject('CoursesAPI', CoursesAPI());
  inject('AuthAPI', AuthAPI());
  inject('MemberAPI', MemberAPI());
  inject('CartsAPI', CartsAPI());
};