<script setup>

import { getCurrentInstance, ref } from "vue";
import QuestionCategory from "./QuestionCategory.vue";
import QuestionItem from "./QuestionItem.vue";

const questionCategoryRef=ref()
const dataSource = ref({});
const loadStatus = ref(null);
const categoryInfo = ref({
  categoryId: "0",
  categoryName: "全部分类",
});
const loadDataList = async () => {
  let result = await proxy.Request({
    url: "",
    showLoading: false,
    params: {
      categoryId: categoryInfo.value.categoryId,
     // pageNo:dataSource.value.pageNo,
    },
  });
  if (!result) {
    return;
  }
  loadStatus.value = "more";
  dataSource.value = result.data;
};

const { proxy } = getCurrentInstance().appContext.config.globalProperties;
const props = defineProps({
  showLeft: {
    type: Boolean,
    default: true,
  },
});
const showCategory = () => {
  questionCategoryRef.value.show(categoryInfo.value)
};

const selectCategory = (category) => {
  categoryInfo.value=Object.assign({},category)
  loadDataList()
};
</script>

<template>
  <view>
    <NavBar :showLeft="showLeft" :title="categoryInfo.categoryName">
      <template #right>
        <view class="iconfont icon-more-line" @click="showCategory"></view>
      </template>
    </NavBar>
    <view>
      <view class="question-list">
        <data-list :dataSource="dataSource"
                   :loadStatus="loadStatus"
                   @loadData="loadDataList">
          <template #default="{ data }">
            <question-item
                :data="data"
                :categoryId="categoryInfo.categoryId"
                :show-detail="true"
            ></question-item>
          </template>
        </data-list>
      </view>
      <question-category ref="questionCategoryRef" @select="selectCategory"></question-category>
    </view>
  </view>
</template>

<style scoped>
.icon-more-line {
  text-align: right;
  font-size: 20px;
}
</style>
