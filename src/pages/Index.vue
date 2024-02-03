<template>
  <Navbar :showLeft="false" title="easyJob"></Navbar>
  <view> 首页 </view>
</template>

<script setup>
import {onLoad} from "@dcloudio/uni-app";
import {ref,reactive,getCurrentInstance,nextTick} from "vue";

const carouselList=ref([])
const proxy = getCurrentInstance().appContext.config.globalProperties

const loadCarouselData=async ()=>{
 let result=await proxy.Request({
   url:"",
   showLoading:false,
 })
  if(!result){
    return
  }
  carouselList.value=result.data
}
//获取轮播图
loadCarouselData()
</script>

<style></style>
