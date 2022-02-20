export default {
  setNewCartsInfo(state, payload) {
    const {data: items, global_coupons: coupons, total, subtotal} = payload;
    state.items = items;
    state.coupons = coupons;
    state.total = total;
    state.subtotal = subtotal;
  },
  setExistCartsInfo(state, payload) {
    const {data: items} = payload;
    state.items = items;
  },
  clearCartsInfo(state) {
    state.items = [];
    state.coupons = [];
    state.total = 0;
    state.subtotal = 0;
  }
};