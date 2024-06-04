"use strict";
//! Task 1
//* Напиши скрипт, який виконає наступні операції.

//* Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

//* Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

//* Наприклад, для першої категорії вийде:

//* Категорія: Тварини
//* Кількість елементів: 4

const myCategories = document.getElementById("categories");

const categoriesCount = myCategories.querySelectorAll(".item").length;
console.log(`У списку ${categoriesCount} категорії`);

myCategories.querySelectorAll(".item").forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("li").length;

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryItemsCount}`);
});

//! Task 2

//* Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.getElementById("ingredients");

const liElements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientsList.append(...liElements);

console.log(`Список інгредієнтів: ${ingredients.join(", ")}`);

//! Task 3
//* Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

//* Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
//* Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

function createImageGallery() {
  const imageList = document.getElementById("imageList");

  images.forEach((image) => {
    const imageElem = document.createElement("li");
    imageElem.innerHTML = `<img src ="${image.url}" alt = "${image.alt}" >`;
    imageList.appendChild(imageElem);
  });
}

createImageGallery();

//! Task 4

//* Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

//* Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
//* Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
//* Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action ="increment"]');
const valueSpan = document.getElementById("value");

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  updateCounter();
}

function increment() {
  counterValue += 1;
  updateCounter();
}

function updateCounter() {
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

updateCounter();

//! Task 5
//* Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
  const inputValue = nameInput.value.trim();

  if (inputValue) {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = "незнайомець";
  }
});

//! Task 6

// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

//* Скільки символів має бути в інпут, вказується в його атрибуті data-length.
//* Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
//* Для додавання стилів, використовуй CSS-класи valid і invalid.

const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", function () {
  const inputValue = inputElement.value.trim();
  const expectedLength = parseInt(inputElement.getAttribute("data-length"));

  if (inputValue.length === expectedLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
//! Task 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeControl.value + "px";
  textSpan.style.fontSize = fontSize;
});
