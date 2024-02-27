<script setup>
import { userAppInfoStore } from "../../../stores/appinfo";
import { computed, reactive, ref } from "vue";
const appInfoStore = userAppInfoStore();
const props = defineProps({
  type: {
    type: String,
    default: "bottom",
  },
});

const paddingTop = computed(() => {
  if (props.type == "bottom") {
    return 0;
  } else {
    const { statusBar, navBarHeight } = appInfoStore.getInfo();
    return statusBar + navBarHeight;
  }
});

const popupRef = ref();
const show = () => {
  popupRef.value.open();
};
const close = () => {
  popupRef.value.close();
};
defineExpose({
  show,
  close,
});
</script>

<template>
  <uni-popup ref="popup" :type="type" background-color="#fff">
    <view
      class="pop=body"
      :style="{ 'paddding-tio': paddingTop + 'px' }"
    >
      <slot></slot>
    </view>
  </uni-popup>
</template>

<style scoped></style>
