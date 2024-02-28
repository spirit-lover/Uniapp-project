<script setup>
import {LOCAL_STORAGE_KEY} from "../../../utils/Constans";
import {computed} from "vue";


const showNotice=computed(()=>{
  const show=uni.getStorageSync(LOCAL_STORAGE_KEY.show_notice_bar.key)
  return show===""?true:show
})
const closeNotice = () => {
  uni.setStorageSync(LOCAL_STORAGE_KEY.show_notice_bar.key,false);
};
</script>

<template>
  <view class="notic">
    <uni-notice-bar
      show-icon
      text="左右滑动可以切换上、下页"
      :showClose="true"
      @click="closeNotice"
      v-if="showNotice"
    ></uni-notice-bar>
  </view>
</template>

<style scoped></style>
