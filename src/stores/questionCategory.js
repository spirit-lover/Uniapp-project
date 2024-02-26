import { defineStore } from "pinia";
export const userQuestionCategoryStore = defineStore("questionCategory", {
  state: () => {
    return {
      categoryList: [
          {
              categoryId: 1,
              categoryName: "Java",
              iconPath: "",
              bgColor: "red",
              imgPath: "/src/static/Carousel-2.jpg",
              sort: 1,
          },
          {
              categoryId: 2,
              categoryName: "JS",
              iconPath: "",
              bgColor: "green",
              imgPath: "/src/static/Carousel-1.png",
              sort: 2,
          },
          {
              categoryId: 3,
              categoryName: "JS",
              iconPath: true,
              bgColor: "",
              imgPath: "/src/static/Carousel-1.png",
              sort: 2,
          },
      ],
    };
  },
  actions: {
    setInfo(categoryList) {
      this.categoryList = categoryList;
    },
    getInfo() {
      return this.categoryList;
    },
  },
});
