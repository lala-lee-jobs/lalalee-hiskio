<!-- Please remove this file from your project -->
<template>
  <header class=" w-full flex justify-between">
    <section class="w-full flex items-center justify-start ">
      <div>
        <img src="~/assets/icons/logo.svg" />
      </div>
      <div class="hidden md:flex">
        <div>
          <img src="~/assets/icons/hire.svg" />
        </div>
        <div class="w-full flex items-center justify-around">
          <img src="~/assets/icons/grid.svg" />
          <p>課程</p>
        </div>
      </div>
    </section>
    <section class="w-full flex items-center justify-start">
      <div>
        <img src="~/assets/icons/grid.svg" />
      </div>
    </section>
    <section class="w-full flex items-center justify-end ">
      <nuxt-link to="">我想開課</nuxt-link>
      <img src="~/assets/icons/cart.svg" />
      <nuxt-link to="">登入</nuxt-link>
      <nuxt-link to="">註冊</nuxt-link>
    </section>
  </header>
</template>
<script>
export default {
  name: 'LayoutHeader'
}
</script>
