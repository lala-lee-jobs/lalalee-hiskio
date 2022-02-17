import createPersistedState from 'vuex-persistedstate';
/**
 * @category plugins
 * @module createPersistedState
 * @description <caption>Vuex Persistence Plugin - 整合第三方 及 自訂 到 Nuxt</caption>
 * <pre>
 *   npm install vuex-persistedstate --save
 *   import createPersistedState from 'vuex-persistedstate';
 * </pre>
 */

export default ({ store }, inject) => {
  const localStoragePaths = [];
  const sessionStoragePaths = [
    'Member',
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
