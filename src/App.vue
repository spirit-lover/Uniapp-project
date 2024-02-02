<script setup>
import { onLaunch } from "@dcloudio/uni-app";
import { userAppInfoStore } from "./stores/appinfo";

const appInfoStore = userAppInfoStore();

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
