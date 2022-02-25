<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
// https://mavrickmaster.medium.com/custom-error-pages-with-nuxt-js-3c70e6c51aff
import error404 from '~/components/Error/404.vue';
import error500 from '~/components/Error/500.vue';
export default {
  name: 'NuxtError',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404;
      }
      // catch everything else
      return error500;
    },
  },
}
</script>