// export const constructor = () => {
//    const regular = document.querySelector(".regular-img");
//    const constrouctor = document.querySelector(".constructor-container");
//    const images = document.querySelectorAll(".image");
//    const constructorImg = document.querySelector(".constructor-img");

//    images.forEach((image) => {
//       image.addEventListener("click", () => {
//          const img = image.querySelector("img").dataset.img;
//          //  console.log(img);

//          regular.classList.add("active");
//          regular.querySelector("img").src = img;
//          constrouctor.classList.remove("active");
//       });
//    });

//    constructorImg.addEventListener("click", () => {
//       regular.classList.remove("active");
//       constrouctor.classList.add("active");
//    });
// };

export const changeActiveCircle = (circleType, text) => {
   circleType.forEach((circle) => {
      circle.addEventListener("click", () => {
         const TextColor = circle.dataset.text;

         circleType.forEach((circle) => {
            circle.parentElement.classList.remove("active");
         });
         circle.parentElement.classList.add("active");
         text.innerHTML = TextColor;
      });
   });
};
