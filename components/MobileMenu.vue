<template>
  <div
  v-if="open" class="fixed overflow-auto h-screen w-full top-[50px] bg-white"
  >
    <ul v-if="vxLoggedIn" class="mb-[14px] pt-[40px] pb-[17px] bg-[#EFF5F8]">
      <li class="flex items-center pb-8 border-gray-300 mx-[14px] mb-[14px] border-b-[1px]">
        <div class="border rounded-full bg-cover w-40px h-40px mr-5" :style="memberAvatarStyles">
        </div>
        <p class="font-medium">{{vxMemberData.username}}</p>
      </li>
      <li>
        <a class="relative block w-full pt-[18px] pb-[15px] px-[14px]">我的課程</a>
      </li>
      <li>
        <a class="relative block w-full pt-[18px] pb-[15px] px-[14px]">我的抵用券</a>
      </li>
      <!-- <li>
        <a class="relative block w-full pt-[18px] pb-[15px] px-[14px]">任務板</a>
      </li>
      <li>
        <a class="relative block w-full pt-[18px] pb-[15px] px-[14px]">訂單記錄</a>
      </li>
      <li>
        <a class="relative block w-full pt-[18px] pb-[15px] px-[14px]">帳戶設定</a>
      </li>
      <li>
        <a class="relative block w-full pt-[18px] pb-[15px] px-[14px]">我開設的課</a>
      </li>                                    -->
    </ul>
    <ul class="mb-[14px] pb-[14px] border-b-[1px] bg-white">
      <li>
        <a class="block w-full pt-[18px] pb-[15px] px-[14px]">探索課程</a>
      </li>
      <li>
        <a class="block w-full pt-[18px] pb-[15px] px-[14px]">企業方案</a>
      </li>
    </ul>  
    <ul v-if="!vxLoggedIn" class="mb-[14px] pb-[14px] border-b-[1px] bg-white">
      <li>
        <a class="block w-full pt-[18px] pb-[15px] px-[14px]" @click.prevent="$emit('login-modal-open')">
          登入
        </a>
      </li>
        <a class="block w-full pt-[18px] pb-[15px] px-[14px]" :class="{'text-[#178FAC]':!vxLoggedIn}">
          註冊
        </a>
    </ul>
    <div v-if="vxLoggedIn">
      <button 
        class="block w-full text-left pt-[18px] pb-[15px] px-[14px]" @click="logout()">登出</button>
    </div>
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
    memberAvatarStyles() {
      return {
        backgroundImage: `url(${this.vxMemberData.avatar})`,
      };
    },
    mobileMenuHeightStyles() {
      return `height:calc(100%-50px)`;
    },
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