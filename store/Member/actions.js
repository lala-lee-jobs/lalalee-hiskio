export default {
  async login({commit}) {
    try {
      const { data : memberToken } = await this.$AuthAPI.login({account: 'starluxairlines', password: 'starluxairlines', confirm: true});
      this.$cookies.set('memberToken', memberToken);
      const { data: memberData } = await this.$MemberAPI.getMe(memberToken);
      commit('loginSuccess', memberData);        
    } catch (err) {
      // console.log(err);
    }
  },
};