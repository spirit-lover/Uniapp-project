<script setup>
import { userAppInfoStore } from "../../../stores/appinfo";

const appInfoStore = userAppInfoStore();
const props=defineProps({
  title:{
    type:String
  },
  showLeft:{
    type:Boolean,
    default:true,
  },
  leftClick:{
    type:Function
  }
})
const leftClick=()=>{
  if(props.leftClick){
    props.leftClick()
  }else{
    //返回上一层
    uni.navigateBack()
  }
}
</script>

<template>
  <view>
    <view
      class="navbar"
      :style="{
        height:
          appInfoStore.getInfo().navBarHeight +
          appInfoStore.getInfo().statusBar +
          'px',
        'padding-top': appInfoStore.getInfo().statusBar + 'px',
      }"
    >
      <view class="left">
        <view
            class="iconfont icon-back"
            v-if="showLeft"
            @click="leftClick"
        ></view>
      </view>
      <view class="content">
        <view v-if="title">{{title}}</view>
        <slot></slot>
      </view>
      <view class="right">
        <slot name="right"></slot>
      </view>
    </view>
    <view :style="{
        height:
          appInfoStore.getInfo().navBarHeight +
          appInfoStore.getInfo().statusBar +
          'px',
        'padding-top': appInfoStore.getInfo().statusBar + 'px',
      }"></view>
  </view>
</template>

<style scoped>
.navbar {
  background: linear-gradient(to right, #9060df, #6356de);
  width: 100%;
  position: fixed;
  z-index: 100;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  .left {
    width: 20px;
  }
  .content {
    text-align: center;
    flex: 1;
  }
  .right {
    width: 20px;
  }
}
</style>
