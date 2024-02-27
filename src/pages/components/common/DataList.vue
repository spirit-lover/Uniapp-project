<script setup>
import {computed, getCurrentInstance, ref, watch} from "vue";
import {onPullDownRefresh, onReachBottom} from "@dcloudio/uni-app";

const { proxy } = getCurrentInstance().appContext.config.globalProperties;
const props=defineProps({
  dataSource:{
    type:Object,
  },
  loadStatus:{
    type:String,
    default:"more",//"more" loading noMore
  }
})
const dataList=ref([])

const _loadStatus=computed(()=>{
  if(props.loadStatus=="more" && props.dataSource.pageTotal==props.dataSource.pageNo){
    return "noMore"
  }
  return props.loadStatus
})
const  emit=defineEmits(["loadData"])
onReachBottom(()=>{
  if(_loadStatus.value=="loading" || props.dataSource.pageNo>props.dataSource.pageTotal){
    return
  }
  props.dataSource.pageNo+=1
  emit("loadData")
})
onPullDownRefresh(()=>{
  props.dataSource.pageNo=1
  dataList.value=[]
  emit("loadData")
})
watch(()=>props.dataSource.list,
    (newVal,oldVal)=>{
  if(newVal){
    if(props.dataSource.prageNo==null || props.dataSource.pageNo==1){
      dataList.value=newVal
      return
    }
    dataList.value=dataList.value.concat(newVal)
  }
    })
</script>

<template>
<template v-for="(item,index) in dataList">
  <slot :data="item" :index="index+(dataSource.pageNo-1)*dataSource.pageSize"></slot>
</template>
  <uni-load-more iconType="circle" :status="_loadStatus"></uni-load-more>
</template>

<style scoped>

</style>