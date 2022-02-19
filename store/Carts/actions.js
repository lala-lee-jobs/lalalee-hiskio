export default {
  async vxRemoveItemInCart({commit}, id) {
  },
  async vxAddCourse({ commit, rootGetters }, {id, coupon}) {
    try {
      let existCarts = [];
      const vxLoggedIn = rootGetters['Member/vxLoggedIn'];
      if (vxLoggedIn) {
        const {data: existCartsInfo} = await this.$CartsAPI.listMemberCarts();
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