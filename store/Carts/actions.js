export default {
  async vxAddCourse({commit}, {id, coupon}) {
    try {
      const memberToken = this.$cookies.get('memberToken');
      let existCarts = [];
      if (memberToken) {
        const {data: existCartsInfo} = await this.$CartsAPI.listMemberCarts(memberToken);
        existCarts = existCartsInfo.data.map(({id, coupon}) => ({id, coupon: ''}));
      }
      const newCarts = [{id, coupon: ''}, ...existCarts];
      const {data: newCartsInfo} = await this.$CartsAPI.saveCarts({
        items: newCarts,
        coupons: [],
      });
      const {data: items, global_coupons: coupons, total, subtotal} = newCartsInfo;
      const commitData = {
        items,
        coupons,
        total,
        subtotal,
      };
      console.log('commitData', commitData);
      commit('setCartsInfo', commitData);    
    } catch (err) {
    }
  },
};