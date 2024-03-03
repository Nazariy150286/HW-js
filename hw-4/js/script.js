"use strict ";

// Дз 14.02
// 1. Так, тому що він останній
// 2. Так, тому що немає попереднього елемента

// 17.02
//! 1 Task
const btnFirst = document.getElementById("btnFirst");
const inputFirst = document.getElementById("inputFirst");

btnFirst.addEventListener("click", () => {
  const text = inputFirst.value;
  btnFirst.textContent = text;
});

//! 2 Task
let img = document.getElementById("image");

img.addEventListener("click", () => {
  img.src = "./img/romashka.jpg";
});

//! 3 Task

let link = document.getElementById("link");

link.addEventListener("click", () => {
  link.href = "https://www.youtube.com/";
});

let image = document.getElementById("image");
image.addEventListener("click", () => {
  image.alt = "apple";
});

//! 4 Task

const firstElement = document.getElementById("first");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  firstElement.firstChild.textContent = "Я й справді перший елемент";
  firstElement.style.color = "red";
});
