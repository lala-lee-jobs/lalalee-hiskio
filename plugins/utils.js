import {currency} from '@/utils'; 
export default (nuxtContext, inject) => {
  inject('currency', currency);
};