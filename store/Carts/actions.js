export default {
  async vxRemoveItemInCart({state, commit, dispatch}, id) {
    // FIXME: API 回傳 500 但與 Swagger 的資料結構比對，沒有發現不同的地方 
    try {
      const existCarts = await dispatch('vxGetExistCarts');
      const removeCarts = existCarts
        .filter(c => c.id === id)
        .map(c => {
          c.id = Number(c.id);
          return c;
        });
      console.log('removeCarts', removeCarts);
      await this.$CartsAPI.deleteCarts({
        items: removeCarts,
        coupons: [],
      });      
    } catch (error) {
      window.$nuxt.error(error);
    }
  },
  async vxGetExistCarts({ commit, rootGetters }) {
    let existCarts = [];
    const vxLoggedIn = rootGetters['Member/vxLoggedIn'];
    if (vxLoggedIn) {
      const existCartsInfo = await this.$CartsAPI.listMemberCarts();
      // FIXME: 傳入items空陣列帶回的subtotal及total為0
      commit('setExistCartsInfo', existCartsInfo);
      existCarts = existCartsInfo.data.map(({id, coupon}) => ({id, coupon: ''}));
    } else {
      commit('clearCartsInfo');
    }
    return existCarts;
  },
  async vxAddCourse({ commit,dispatch }, {id, coupon}) {
    try {
      const existCarts = await dispatch('vxGetExistCarts');
      const newCarts = [{id, coupon: ''}, ...existCarts];
      const newCartsInfo = await this.$CartsAPI.saveCarts({
        items: newCarts,
        coupons: [],
      });
      commit('setNewCartsInfo', newCartsInfo);    
    } catch (err) {
    }
  },
};