"use strict";

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.querySelector(".fa-arrow-up").style.opacity = 1;
    document.querySelector(".header").classList.add("shadow");
} else {
    document.querySelector(".fa-arrow-up").style.opacity = 0;
    document.querySelector(".header").classList.remove("shadow");
  }
});
