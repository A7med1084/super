"use strict";

const fill = document.querySelector(".fill");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.querySelector(".up").style.opacity = 1;
    document.querySelector(".header").classList.add("shadow");
} else {
    document.querySelector(".up").style.opacity = 0;
    document.querySelector(".header").classList.remove("shadow");
  }
  let value = window.scrollY;
  let pageHeight = document.documentElement.scrollHeight;
  fill.style.backgroundImage = `conic-gradient( #186baf 0deg, #186baf ${value / (pageHeight - 810) * 360}deg, transparent 0`
  console.log(pageHeight);
});

