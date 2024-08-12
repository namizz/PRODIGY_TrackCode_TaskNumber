"use strict";

const clickhere = document.getElementById("more-info");
const close = document.getElementById("close");
const main = document.querySelector("main");
const information = document.querySelector(".hidden");
const image = document.querySelector("#image");

clickhere.addEventListener("click", () => {
  main.classList.add("blur");
  information.style.display = "block";
});
image.addEventListener("click", () => {
  main.classList.add("blur");
  information.style.display = "block";
});

close.addEventListener("click", () => {
  main.classList.remove("blur");
  information.style.display = "none";
});
