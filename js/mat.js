import { navbar } from "./navbar.js";
import { changeActiveCircle } from "./constructor.js";
import { evaMat } from "./data.js";
navbar();
// constructor();

const regular = document.querySelector(".regular-img");
// const constrouctor = document.querySelector(".constructor-container");

// start material type
const matType = document.querySelectorAll(".type");
const typeText = document.querySelector(".choose-mat-type");
const colorList = document.querySelectorAll(".color-list");
const lis = document.querySelectorAll(".color-list li");

changeActiveCircle(matType, typeText);

matType.forEach((item) => {
   item.addEventListener("click", () => {
      // regular.classList.remove("active");
      // constrouctor.classList.add("active");
      const baseImg = item.dataset.base;
      const borderImg = item.dataset.border;
      const borderLineImg = item.dataset.borderline;

      baseText.innerHTML = "бежевый";
      borderText.innerHTML = "бежевый";

      baseColor.src = baseImg;
      borderColor.src = borderImg;
      borderLineColor.src = borderLineImg;

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
   });
});
// end  material type

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

// start complete set
const setMarkup = ({ name, price }) => `
            <input type="checkbox" id="${name}" />
            <label for="${name}" class="item-info">
               <p>${name}</p>
               <p class="set-price">${price} руб.</p>
            </label>
         `;

const container = document.querySelector(".complete-set .set-list");

evaMat.forEach((nodeData, index) => {
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

   if (evaMat[0] === nodeData) {
      [...container.children].slice(1).forEach((el) => {
         el.querySelector('input[type="checkbox"]').checked = false;
      });
      for (let i = 0; i < evaMat.length; i++) {
         if (i === 0) continue;
         evaMat[i].active = false;
      }
   } else {
      container.children[0].querySelector(
         'input[type="checkbox"]'
      ).checked = false;
      evaMat[0].active = false;
   }
   evaMat[index].active = e.target
      .closest("li")
      .querySelector('input[type="checkbox"]').checked;
   evaMat.filter((item) => {
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
