export default {
  setCarts(state, {items, coupons}) {
    state.items = items;
    state.coupons = coupons;
  }
};