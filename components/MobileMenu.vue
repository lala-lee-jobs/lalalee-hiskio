<template>
  <div v-if="open" class="fixed w-full h-screen top-5 bg-white">
    <div v-if="vxLoggedIn">
      <img width="32" :src="vxMemberData.avatar" />
      <span>{{vxMemberData.username}}</span>
    </div>
    <div v-else>
      Test
    </div>
    <ul class="p-3">
      <li>探索課程</li>
      <li>企業方案</li>
    </ul>  
    <ul class="p-3">
      <li @click="$emit('login-modal-open')">登入</li>
      <li>註冊</li>
    </ul>
    <div v-if="vxLoggedIn" class="p-3" @click="logout()">登出</div>
  </div>
</template>
<script>
import { mapState, mapGetters , mapActions } from 'vuex';
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState('Member', { vxMemberData: 'memberData' }),
    ...mapGetters('Member', ['vxLoggedIn']),
  },
  methods: {
    ...mapActions('Member', [
      'vxLogout',
    ]),
    logout() {
      this.vxLogout();
      this.$emit('logout');
      this.$nuxt.$emit('logout');
    }    
  }
};
</script>