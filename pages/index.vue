<template>
  <div>
    <section>
      <carts-info></carts-info>
    </section>
    <section>
      <course-list fundraising/>
    </section>
  </div>
</template>

<script>
import CartsInfo from '../components/Carts/CartsInfo.vue'
export default {
  name: 'IndexPage',
  components: { CartsInfo },
  layout: 'default',
}
</script>
