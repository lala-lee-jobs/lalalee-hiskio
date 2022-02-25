<template>
  <div>
    <h2>404</h2>
    {{error}}
  </div>
</template>
<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>