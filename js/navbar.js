export const navbar = () => {
   const menu = document.querySelector(".menu-container");
   const menuLinks = document.querySelectorAll(".menu-links");
   const subMenu = document.querySelector(".sub-menu-container");
   const hamburger = document.querySelector(".hamburger");
   const times = document.querySelector(".times");
   const dropItem = document.querySelector(".drop-item");
   const dropIcon = document.querySelector(".drop-icon");

   hamburger.addEventListener("click", () => {
      menu.classList.add("toggle");
   });
   times.addEventListener("click", () => {
      menu.classList.remove("toggle");
   });
   dropItem.addEventListener("click", () => {
      dropItem.classList.toggle("active");
      dropItem.classList.contains("active")
         ? (dropIcon.style.transform = "rotate(180deg)")
         : (dropIcon.style.transform = "rotate(0deg)");
   });

   menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
         for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].classList.remove("active");
         }
         link.classList.add("active");
      });
   });
};
