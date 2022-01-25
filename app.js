import { navbar } from "./js/navbar.js";

navbar();
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const dotsNumber = document.querySelector(".dots-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

slides.forEach(function (slide, index) {
   slide.style.left = `${index * 100}%`;
});
let counter = 0;
let timer = setInterval(() => {
   counter++;
   carousel();
   changeDot();
}, 4000);
nextBtn.addEventListener("click", function () {
   counter++;
   carousel();
   changeDot();
   resetTimer();
});

prevBtn.addEventListener("click", function () {
   counter--;
   carousel();
   changeDot();
   resetTimer();
});

function carousel() {
   if (counter === slides.length) {
      counter = 0;
   }
   if (counter < 0) {
      counter = slides.length - 1;
   }

   slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
   });
}
dotsNumber.addEventListener("click", (e) => {
   const dotNum = e.target.dataset.id;
   for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
   }
   e.target.classList.add("active");

   if (dotNum) {
      //   resetTimer();
      counter = +dotNum;
      carousel();

      resetTimer();
   }
});
const changeDot = () => {
   dots.forEach((dot, index) => {
      dot.classList.remove("active");
      if (index === counter) {
         dot.classList.add("active");
      }
   });
};

function resetTimer() {
   clearInterval(timer);
   timer = setInterval(() => {
      counter++;
      carousel();
      changeDot();
   }, 4000);
}
