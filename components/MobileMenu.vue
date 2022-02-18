<template>
  <div v-if="open" class="fixed w-full h-screen top-5 bg-white">
    <div v-if="vxMemberData">
      <img width="32" :src="vxMemberData.avatar" />
      <span>{{vxMemberData.username}}</span>
    </div>
    <div v-else>
      Test
    </div>
    <ul class="p-3">
      <li>探索課程</li>
      <li>企業方案</li>
      <li @click="$emit('login-modal-open')">登入</li>
      <li>註冊</li>
    </ul>  
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState('Member', { vxMemberData: 'memberData' }),
  },
};
</script>