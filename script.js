"use strict";

const header = document.querySelector(".header");
const fill = document.querySelector(".fill");
const up = document.querySelector(".up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    up.classList.add("show");
    header.classList.add("shadow");
} else {
    up.classList.remove("show");
    header.classList.remove("shadow");
  }
  let value = window.scrollY;
  let pageHeight = document.documentElement.scrollHeight;
  fill.style.backgroundImage = `conic-gradient( #186baf 0deg, #186baf ${value / (pageHeight - 810) * 360}deg, transparent 0`
  console.log(pageHeight);
});

