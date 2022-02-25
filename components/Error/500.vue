<template>
  <div>
    <h2>500</h2>
    {{error}}
  </div>
</template>
<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>