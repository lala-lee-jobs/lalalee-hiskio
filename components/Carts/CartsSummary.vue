<template>
  <div>
    <div>小計</div>
    <div>{{vxSubtotal}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('Carts', { vxSubtotal: 'subtotal', vxTotal: 'total' }),
  },
}
</script>