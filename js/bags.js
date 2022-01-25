import { navbar } from "./navbar.js";
import { changeActiveCircle } from "./constructor.js";

// const regular = document.querySelector(".regular-img");
// const constrouctor = document.querySelector(".constructor-container");

navbar();
// constructor();

// start bag type
const bagType = document.querySelectorAll(".type");
const typeText = document.querySelector(".choose-bag-type");
const borderItems = document.querySelectorAll(
   ".bage-border-color .items-list li"
);

changeActiveCircle(bagType, typeText);

bagType.forEach((item) => {
   item.addEventListener("click", () => {
      const baseImg = item.dataset.base;
      const borderImg = item.dataset.border;
      const lineImg = item.dataset.line;
      baseColor.src = baseImg;
      borderColor.src = borderImg;
      lineColor.src = lineImg;

      baseText.innerHTML = "бежевый";
      borderText.innerHTML = "бежевый";
      lineText.innerHTML = "бежевый";

      item.parentElement.classList.add("active");

      borderItems.forEach((item) => {
         item.classList.remove("active");
      });
      document.querySelector(".ss").classList.add("active");

      // regular.classList.remove("active");
      // constrouctor.classList.add("active");
      const itemClass = item.dataset.class;
      colorList.forEach((item) => {
         item.classList.remove("active1");

         if (item.classList.contains(itemClass)) {
            lis.forEach((li) => {
               li.classList.remove("active");
            });
            item.classList.add("active1");
            item.querySelector(".items-list > li").classList.add("active");
         }
      });
      colorList1.forEach((item) => {
         item.classList.remove("active2");

         if (item.classList.contains(itemClass)) {
            lis1.forEach((li) => {
               li.classList.remove("active");
            });
            item.classList.add("active2");
            item.querySelector(".items-list1 > li").classList.add("active");
         }
      });
   });
});
// end bag type

// start base color
const baseColorCircles = document.querySelectorAll(".base-color");
const baseText = document.querySelector(".choose-bag-base-color");
const baseColor = document.querySelector(".bag-ba");
const colorList = document.querySelectorAll(".color-list");
const lis = document.querySelectorAll(".color-list li");

changeActiveCircle(baseColorCircles, baseText);

baseColorCircles.forEach((circle) => {
   circle.addEventListener("click", () => {
      const baseImg = circle.dataset.img;
      // regular.classList.remove("active");
      // constrouctor.classList.add("active");
      baseColor.src = baseImg;
   });
});

// end base color

// start border color
const borderColorCircles = document.querySelectorAll(".border-color");
const borderText = document.querySelector(".choose-bag-border-color");
const borderColor = document.querySelector(".bag-bo");
const colorList1 = document.querySelectorAll(".color-list1");
const lis1 = document.querySelectorAll(".color-list1 li");

changeActiveCircle(borderColorCircles, borderText);

borderColorCircles.forEach((circle) => {
   circle.addEventListener("click", () => {
      const borderImg = circle.dataset.img;
      // regular.classList.remove("active");
      // constrouctor.classList.add("active");
      borderColor.src = borderImg;
   });
});
// end border color

// start line color
const lineColorCircles = document.querySelectorAll(".line-color");
const lineText = document.querySelector(".choose-bag-line-color");
const lineColor = document.querySelector(".bag-line");

changeActiveCircle(lineColorCircles, lineText);

lineColorCircles.forEach((circle) => {
   circle.addEventListener("click", () => {
      const lineImg = circle.dataset.img;
      // regular.classList.remove("active");
      // constrouctor.classList.add("active");
      lineColor.src = lineImg;
   });
});

// end line color
