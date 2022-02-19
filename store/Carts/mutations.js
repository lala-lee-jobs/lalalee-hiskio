export default {
  setCartsInfo(state, {items, coupons, total, subtotal}) {
    state.items = items;
    state.coupons = coupons;
    state.total = total;
    state.subtotal = subtotal;
  }
};