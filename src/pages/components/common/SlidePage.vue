<script setup>
import {userAppInfoStore} from "../../../stores/appinfo";
import {computed, ref} from "vue";
import {LOCAL_STORAGE_KEY} from "../../../utils/Constans";
const appInfoStore=userAppInfoStore()

const {statusbar,ScreenHeight,navBarHeight}=appInfoStore.getInfo()
const paddingBottom=50
const contentHeight=computed(()=>{
  const show=uni.getStorageSync(LOCAL_STORAGE_KEY.show_notice_bar.key)
  let tipsHeight=0
  if(show===""){
    tipsHeight=42
  }
  return ScreenHeight-statusbar-navBarHeight-50-tipsHeight
})

const nextType=ref(null)
const startX=ref()
const startY=ref()
const touchstart=(e)=>{
  const touch=e.changedTouches[0]
  startX.value=touch.clientX
  startY.value=touch.clientY
}
const emit=defineEmits(["loadData"])
const touchend=(e)=>{
  const touch=e.changedTouches[0]
  const endX=touch.clientX
  const endY=touch.clientY

  const moveX=endX-startX.value
  const moveY=endX-startY.value
  const absMoveX=Math.abs(moveX)
  if(absMoveX<60 ||absMoveX==0 || moveY>50){
    return
  }
  //向左滑
  if(moveX<0){
    nextType.value=1
  }
  if(moveX>0){
    nextType.value=-1
  }
  startX.value=0
  startY.value=0
  emit("loadData",nextType.value)
}
</script>

<template>
<view class="detail" selectable="true" :style="{height:contentHeight+'px','padding-bottom':paddingBottom+'px'}" @touchstart="touchstart" @touchend="touchend">
  <slot></slot>
</view>

</template>

<style scoped>

</style>