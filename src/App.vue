<script setup>
import { onLaunch } from "@dcloudio/uni-app";
import { userAppInfoStore } from "./stores/appinfo";
import { userQuestionCategoryStore } from "./stores/questionCategory";
import {getCurrentInstance} from "vue";
const proxy = getCurrentInstance().appContext.config.globalProperties;

const appInfoStore = userAppInfoStore();
const questionCategoryStore = userQuestionCategoryStore();

const saveDeviceInfo = (e) => {
  let statusBar = e.statusBarHeight;
  const naveBarHeight = 45;
  const deviceId = e.deviceId;
  const devicesBrand = e.deviceBrand;
  appInfoStore.setInfo(
      statusBar,
      naveBarHeight,
      e.screenWidth,
      e.screenHeight,
      deviceId,
      devicesBrand,
      e.appWgtVersion,
  );
};
//获取八股文分类数据
const  loadCategoryDate=async ()=>{
  let result=await proxy.Request({
    url:"",
    params:{
      type:0
    },
  })
  if(!result){
    return
  }
  questionCategoryStore.setInfo(result.data)
}
loadCategoryDate()
onLaunch(() => {
  uni.getSystemInfo({
    success: (e) => {
      saveDeviceInfo(e);
    },
  });
});
</script>

<style>
/*每个页面公共css */
</style>
