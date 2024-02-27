<script setup>
import { userQuestionCategoryStore } from "../../stores/questionCategory";
import {ref} from "vue";
const questionCategoryStore = userQuestionCategoryStore();

const categoryPoupRef=ref()
const currentCategoryId=ref(0)
const show = (category) => {
  currentCategoryId.value=category.categoryId
  categoryPoupRef.value.show()
};
const emit=defineEmits(["select"])
const selectCategory=(item)=>{
  currentCategoryId.value=item.categoryId
  emit("select",{
    categoryName:item.categoryName,
    categoryId:item.categoryId+"",
  })
  categoryPoupRef.value.close()
}
defineExpose({
  show,
})
</script>

<template>
  <view>
    <Popup type="right" ref="categoryPoupRef">
      <view class="category-list">
        <view
          :class="['item', currentCategoryId == 0 ? 'active' : '']"
          @click="selectCategory({ categoryId: 0, categoryName: '全部分类' })"
        >
          全部分类
        </view>
        <view
          v-for="item in questionCategoryStore.getInfo()"
          :class="[
            'item',
            currentCategoryId == item.categoryId ? 'active' : '',
          ]"
          @click="selectCategory({ category: 0, categoryName: '全部分类' })"
          >{{ item.categoryName }}</view
        >
      </view>
    </Popup>
  </view>
</template>

<style scoped>
.category-title {
  .item {
    padding: 10px;
    font-size: 16px;
  }
  .active {
    color: #1a72f4;
  }
}
</style>
