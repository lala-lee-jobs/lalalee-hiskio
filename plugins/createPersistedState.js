import createPersistedState from 'vuex-persistedstate';

export default ({ store }, inject) => {
  const localStoragePaths = [];
  const sessionStoragePaths = [
    'Member', 'Carts'
  ];

  window.onNuxtReady(() => {
    createPersistedState({
      paths: localStoragePaths,
      storage: window.localStorage,
    })(store);

    createPersistedState({
      paths: sessionStoragePaths,
      storage: window.sessionStorage,
    })(store);
  });
};
