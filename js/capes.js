import { changeActiveCircle } from "./constructor.js";
import { navbar } from "./navbar.js";
import { capes } from "./data.js";

// const regular = document.querySelector(".regular-img");
// const constrouctor = document.querySelector(".constructor-container");

navbar();
// constructor();

// start base color
const baseColorCircles = document.querySelectorAll(".base-color");
const baseText = document.querySelector(".choose-cape-base-color");
const baseColor = document.querySelector(".cape-ba");

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
const borderText = document.querySelector(".choose-cape-border-color");
const borderColor = document.querySelector(".cape-bo");

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

// start complete set
const setMarkup = ({ name, price }) => `
         <input type="checkbox" id="${name}" />
         <label for="${name}" class="item-info">
            <p>${name}</p>
            <p class="set-price">${price} руб.</p>
         </label>
         `;

const container = document.querySelector(".complete-set .set-list");

capes.forEach((nodeData, index) => {
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

   if (capes[0] === nodeData) {
      [...container.children].slice(1).forEach((el) => {
         el.querySelector('input[type="checkbox"]').checked = false;
      });
      for (let i = 0; i < capes.length; i++) {
         if (i === 0) continue;
         capes[i].active = false;
      }
   } else {
      container.children[0].querySelector(
         'input[type="checkbox"]'
      ).checked = false;
      capes[0].active = false;
   }
   capes[index].active = e.target
      .closest("li")
      .querySelector('input[type="checkbox"]').checked;
   capes.filter((item) => {
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
