<script setup>
import { ref } from "vue";
import uvParse from "../components/uv-parse/uv-parse.vue";
import QuestionItem from "./QuestionItem.vue";
import Footer from "../components/common/Footer.vue";
import { LOCAL_STORAGE_KEY } from "../../utils/Constans";
import SlidePage from "../components/common/SlidePage.vue";

const questionData = ref({});
const currentId = ref();
const categoryId = ref();
const nextType = ref(null);
const loadDetail = async () => {
  let result = await proxy.Request({
    url: "",
    params: {
      currentId: currentId.value,
      categoryId: categoryId.value || "",
      nextType: nextType.value,
    },
  });
  if (!result) {
    return;
  }
  questionData.value = result.data;
  currentId.value=result.data.questionId
};

onload((option) => {
  (currentId.value = option.questionId)((categoryId.value = option.categoryId));
  nextType.value = null;
  loadDetail();
});
const updateCollect = (haveCollect) => {
  questionData.value.haveCollect = haveCollect;
};
const readMode = ref("0"); //1 背题模式，展示答案；0：阅读模式，手动展示答案
const changeMode = () => {
  const _readMode = uni.getStorageSync(LOCAL_STORAGE_KEY.readMode.key);
  if (_readMode == "" || _readMode == "0") {
    uni.setStorageSync(LOCAL_STORAGE_KEY.readMode.key, "1");
    readMode.value = "1";
  } else {
    uni.setStorageSync(LOCAL_STORAGE_KEY.readMode.key, "0");
    readMode.value = "0";
  }
};
const showAnswer = ref(false);
const showAnswerHandler = () => {
  showAnswer.value = true;
};

const containerStyle = ref(
  "word-wrap:break-word;word-break:normal;word-break:break-all",
);

const loadDataNext=(_nextType)=>{
  nextType.value=_nextType
  loadDetail()
}
</script>

<template>
  <view>
    <NavBar title="八股文详情"></NavBar>
    <ShowTips></ShowTips>
    <SlidePage @loadData="loadDataNext"></SlidePage>
    <view class="question-detail">
      <view class="title-info">
        <QuestionItem :data="questionData" :showDeatil="false"></QuestionItem>
      </view>
      <view class="question" v-if="questionData.question">
        <view class="question-title">问题描述</view>
        <uv-parse
          class="rich-text"
          :content="questionData.question"
          :container-style="containerStyle"
        ></uv-parse>
      </view>
      <view class="line"></view>
      <view
        class="question-content"
        v-if="readMode === '1' || (readMode === '0' && showAnswer)"
      >
        <view class="title">-<text class="inner">问题解析</text></view>
        <uv-parse
          class="rich-text"
          :content="questionData.answerAnalysis"
          :container-style="containerStyle"
          v-if="questionData.answerAnalysis"
        ></uv-parse>
      </view>
    </view>
    <Footer
      :objectId="questionData.questionId + ''"
      :collectType="1"
      @updateCollect="updateCollect"
      :haveCollect="questionData.haveCollect"
    >
      <view class="page-op">
        <view class="btn btn-mode" @click="changeMode">
          <text>{{ readMode == "0" ? "背题模式" : "阅读模式" }}</text>
          <text class="iconfont icon-exchange"></text>
        </view>
        <view
          class="btn show-answer"
          v-if="readMode ==='0'"
          @click="showAnswerHandler"
          >查看答案</view
        >
      </view>
    </Footer>
  </view>
</template>

<style scoped></style>
