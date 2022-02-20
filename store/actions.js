export default {
  async nuxtServerInit(vuexContext, nuxtContext) {
    const { app } = nuxtContext;
    const { commit } = vuexContext;
    const { data } = await app.$CoursesAPI.getFundraising();
    commit('Courses/setFundraising', data);
  },
};
