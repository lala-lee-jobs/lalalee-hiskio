export default {
  async nuxtServerInit(vuexContext, nuxtContext) {
    const { app } = nuxtContext;
    const { commit } = vuexContext;
    const courses = await app.$CoursesAPI.getFundraising();
    commit('Courses/setFundraising', courses);
  },
};
