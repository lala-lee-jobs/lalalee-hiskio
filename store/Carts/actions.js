export default {
  async vxAddCourse({commit}, {id, coupon}) {
    try {
      const memberToken = this.$cookies.get('memberToken');
      let existCarts = [];
      if (memberToken) {
        const {data: cartsInfo} = await this.$CartsAPI.listMemberCarts(memberToken);
        existCarts = cartsInfo.data.map(({id, coupon}) => ({id, coupon}));
        console.log('existCarts', existCarts);
      }
      const newCarts = [{id, coupon}, ...existCarts];
      console.log('newCarts', newCarts);
      // commit('setCarts', {id, coupon});        
    } catch (err) {
    }
  },
};