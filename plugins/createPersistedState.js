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

  const vuexMountedReady = (cb) => {
    if (typeof cb === 'function') {
      setTimeout(cb, 0);
    } else {
      // eslint-disable-next-line no-console
      console.log('vuexMountedReady plugin must pass function type');
    }
  };

  inject('vuexMountedReady', vuexMountedReady);
};
