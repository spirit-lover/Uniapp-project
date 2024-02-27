<script setup>

import QuestionList from "./QuestionList.vue";
import {onReachBottom} from "@dcloudio/uni-app";

onReachBottom(()=>{})

</script>

<template>
<question-list :showLeft="false"></question-list>
</template>

<style scoped>

</style>