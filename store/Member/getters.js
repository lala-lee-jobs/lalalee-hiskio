import Cookies from 'js-cookie';

export default {
  vxLoggedIn(state) {
    const { memberData } = state;
    const memberToken = Cookies.get('memberToken');
    return !!memberData && !!memberToken;
  },
}