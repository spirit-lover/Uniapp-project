<template>
  <Navbar :showLeft="false" title="easyJob"></Navbar>
  <view class="content">
    <view class="uni-margin-wrap">
      <swiper class="swiper-box" indicator-dots autoplay="true">
        <swiper-item v-for="(item, index) in carouselList" :key="index">
          <view class="swiper-item">
            <image
              @click="swiperJump(item)"
              :src="item.imgPath"
              mode="aspectFill"
              :style="{ width: '100%' }"
            >
            </image>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
  <view class="quick-list">
    <view class="quick-item search" @click="goSearch">
      <view class="title">搜索入口</view>
      <view class="summary">支持通过关键词搜索</view>
      <view class="btn">去搜索</view>
    </view>
    <view class="quick-item interview" @click="goExam">
      <view class="title">在线考试</view>
      <view class="summary">考考你学的怎么样了</view>
      <view class="btn">去考试</view>
    </view>
  </view>
  <view class="category-title"> 八股文分类 </view>
  <view class="category-list">
        <uni-grid :column="3" :show-border="false" :square="false">
          <uni-grid-item
            v-for="( item, index ) in questionCategoryStore.getInfo()"
            :key="index"
            :index="index"
          >
            <view class="category-item">
              <view
                class="category-item-inner"
                :style="{ background: item.bgColor }"
                @click="goQuestion"
              >
                <image
                  v-if="item.iconPath"
                  :style="{ width: '100%', height: '100px' }"
                  :src="item.imgPath"
                  mode="aspectFill"
                ></image>
              </view>
            </view>
          </uni-grid-item>
        </uni-grid>
  </view>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue";
import { userQuestionCategoryStore } from "../stores/questionCategory";
const questionCategoryStore = userQuestionCategoryStore();
const carouselList = ref([]);
const proxy = getCurrentInstance().appContext.config.globalProperties;

//轮播图本地数据
const carouselList2 = [
  {
    carouseId: 1,
    imgPath: "/src/static/Carousel-2.jpg",
    objectType: 1,
    objectId: 10011,
    outerLink: "www.baidu.com",
    sort: 1,
  },
  {
    carouseId: 2,
    imgPath: "/src/static/Carousel-3.jpg",
    objectType: 3,
    objectId: null,
    outerLink: "",
    sort: 2,
  },
  {
    carouseId: 3,
    imgPath: "/src/static/Carousel-4.jpg",
    objectType: 0,
    objectId: 12345,
    outerLink: "",
    sort: 3,
  },
];

const loadCarouselData = async () => {
  let result = await proxy.Request({
    url: "",
    showLoading: false,
  });
  if (!result) {
    return;
  }
  carouselList.value = result.data;
};
//获取轮播图
loadCarouselData();
carouselList.value = carouselList2;
//轮播图跳转
const swiperJump = (data) => {
  let url=`pages/share/ShareDetail?shareId=${data.objectId}`
  if(data.objectId==1){
    url:`pages/question/QuestionDetail?questionId=${data.objectId}`
  }else if(data.objectId==2){
    url:`pages/carousel/ExamQuestion?questionId=${data.objectId}`
  }else if(data.objectId==3){
    url:`pages/carousel/WebView?url=${encodeURI(data.outerLink)}`
  }
  uni.navigateTo({
    url:url
  })
};
const goSearch = () => {
  uni.navigateTo({
    url:`/pages/search/SearchIndex`
  })
};
const goExam = () => {
  uni.switchTab({
    url:"./exam/Exam"
  })
};
const goQuestion = () => {
  uni.navigateTo({
    url:`/pages/question/QuestionList?categoryOd=${item.categoryId}&categoryName=${encodeURIComponent(item.categoryName)}`
  })
};
</script>

<style>
.top {
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #9005fa;
  height: 40px;
  .logo {
    color: #fff;
    font-size: 20px;
  }
  .search {
    font-size: 25px;
    color: #fff;
  }
}
.uni-margin-wrap {
  width: 100%;
  background: #e0e0e0;
  .swiper-box {
    height: 200px;
  }
  .swiper-item {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 200px;
  }
}
.quick-list {
  display: flex;
  margin-top: 20px;
  .quick-item {
    width: 100%;
    margin: 0px 5px;
    border-radius: 5px;
    padding: 15px;
    color: #fff;
  }
  .title {
    font-weight: bold;
  }
  .summary {
    font-size: 14px;
    margin-top: 2px;
  }
  .btn {
    margin-top: 10px;
    float: left;
    font-size: 12px;
    border-radius: 5px;
    padding: 4px 10px 4px 10px;
  }
}
.search {
  background: #6663cd;
  .btn {
    background: #8891ed;
  }
}
.interview {
  background: #aa6bd9;
  .btn {
    background: #874ec1;
  }
}
.category-title {
  margin-top: 20px;
  padding-left: 10px;
  font-weight: bolder;
  color: #464646;
}
.category-list {
  margin-top: 10px;
  overflow: hidden;
  padding: 0px 5px 10px 5px;
  .category-item {
    padding: 3px;
    .category-item-inner {
      height: 100px;
      border-radius: 5px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 20px;
      overflow: hidden;
    }
  }
}
</style>
