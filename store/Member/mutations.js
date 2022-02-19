export default {
  loginSuccess(state, payload) {
    state.memberData = payload;
  },
  logoutSuccess(state) {
    state.memberData = null;
  }
};