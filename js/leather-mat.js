import { navbar } from "./navbar.js";
import { changeActiveCircle } from "./constructor.js";
import { leatherMat } from "./data.js";
navbar();
// constructor();

// const regular = document.querySelector(".regular-img");
// const constrouctor = document.querySelector(".constructor-container");

// start base color

const baseColorCircles = document.querySelectorAll(".base-color");
const baseText = document.querySelector(".choose-mat-base-color");
const baseColor = document.querySelector(".mat-ba");

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
const borderText = document.querySelector(".choose-mat-border-color");
const borderColor = document.querySelector(".mat-bo");

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

// start border line color
const borderLineColorCircles = document.querySelectorAll(".border-line-color");
const borderLineText = document.querySelector(".choose-mat-border-line-color");
const borderLineColor = document.querySelector(".mat-bo-line");

changeActiveCircle(borderLineColorCircles, borderLineText);

borderLineColorCircles.forEach((circle) => {
   circle.addEventListener("click", () => {
      const borderLineImg = circle.dataset.img;
      // regular.classList.remove("active");
      // constrouctor.classList.add("active");
      borderLineColor.src = borderLineImg;
   });
});

// end border line color

// start line type
const lineTypeCircles = document.querySelectorAll(".l-type");
const lineTypeText = document.querySelector(".choose-mat-line-type");
const LineColor = document.querySelector(".mat-leather-line");

changeActiveCircle(lineTypeCircles, lineTypeText);

const colorList2 = document.querySelectorAll(".color-list2");
const lis2 = document.querySelectorAll(".color-list2 li");

lineTypeCircles.forEach((type) => {
   type.addEventListener("click", () => {
      // regular.classList.remove("active");
      // constrouctor.classList.add("active");
      const typeClass = type.dataset.class;
      const lineImg = type.dataset.line;
      LineColor.src = lineImg;

      lineColorText.innerHTML = "бежевый";

      colorList2.forEach((item) => {
         item.classList.remove("active3");

         if (item.classList.contains(typeClass)) {
            lis2.forEach((li) => {
               li.classList.remove("active");
            });
            item.classList.add("active3");
            item.querySelector(".items-list2 > li").classList.add("active");
         }
      });
   });
});
// end line type

// start line color
const lineColorCircles = document.querySelectorAll(".line-color");
const lineColorText = document.querySelector(".choose-mat-line-color");

changeActiveCircle(lineColorCircles, lineColorText);

lineColorCircles.forEach((circle) => {
   circle.addEventListener("click", () => {
      const lineImg = circle.dataset.img;
      // regular.classList.remove("active");
      // constrouctor.classList.add("active");
      LineColor.src = lineImg;
   });
});

// end line color

// start complete set
const setMarkup = ({ name, price }) => `
<input type="checkbox" id="${name}" />
<label for="${name}" class="item-info">
   <p>${name}</p>
   <p class="set-price">${price} руб.</p>
</label>
         `;

const container = document.querySelector(".complete-set .set-list");

leatherMat.forEach((nodeData, index) => {
   const li = document.createElement("li");
   li.classList.add("set-item");

   li.addEventListener("click", checkHandler.bind(null, nodeData, index));
   li.innerHTML = setMarkup(nodeData);
   if (nodeData.active) {
      li.querySelector('input[type="checkbox"]').checked = true;
   }
   container.appendChild(li);
});

function checkHandler(nodeData, index, e) {
   // e.target.closest("li").classList.add("active");
   // todo add
   receiptList.innerHTML = "";
   let sum = 0;

   if (leatherMat[0] === nodeData) {
      [...container.children].slice(1).forEach((el) => {
         el.querySelector('input[type="checkbox"]').checked = false;
      });
      for (let i = 0; i < leatherMat.length; i++) {
         if (i === 0) continue;
         leatherMat[i].active = false;
      }
   } else {
      container.children[0].querySelector(
         'input[type="checkbox"]'
      ).checked = false;
      leatherMat[0].active = false;
   }
   leatherMat[index].active = e.target
      .closest("li")
      .querySelector('input[type="checkbox"]').checked;
   leatherMat.filter((item) => {
      const li = document.createElement("li");
      if (item.active) {
         li.classList.add("receipt-item");
         li.innerHTML = recepitMarkup(item);
         sum += item.price;
         receiptList.appendChild(li);
         document.querySelector(".f-price").innerHTML = sum;
      }
   });

   // console.log("click", data);
}
const receiptList = document.querySelector(".receipt-list");
const recepitMarkup = ({ name, price }) => `
<p>${name}</p>
<p >${price} руб.</p>            
`;
// end complete set
