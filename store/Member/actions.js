export default {
  async vxLogin({commit}, {account, password, confirm}) {
    try {
      const { data : memberToken } = await this.$AuthAPI.login({account, password, confirm});
      this.$cookies.set('memberToken', memberToken);
      const { data: memberData } = await this.$MemberAPI.getMe(memberToken);
      commit('loginSuccess', memberData);        
    } catch (err) {
    }
  },
  vxLogout({commit}) {
    this.$cookies.remove('memberToken');
    commit('logoutSuccess'); 
  }
};