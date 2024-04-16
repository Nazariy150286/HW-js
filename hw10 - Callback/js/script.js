"use strict";
//! Task 1
//Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки
// const helloBtn = document.getElementById("helloBtn");
// helloBtn.addEventListener("click", () => {
//   alert("Hello world!");
// });

//! Task 2
//Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// const userGuessInput = document.getElementById("guessField");
// const userResult = document.getElementById("guessResult");

// function checkGuess() {
//   const userGuess = parseInt(userGuessInput.value);
//   if (userGuess === 2) {
//     userResult.textContent = "Вітаємо, ви вгадали число! :)";
//   } else {
//     userResult.textContent = "Ви не вгадали число, спробуйте ще раз! :(";
//   }
// }

//! Task 3
//Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.

// const clickCountElement = document.getElementById("clickCount");
// let clickCount = 0;

// function updateClickCount() {
//   clickCountElement.textContent = clickCount;
// }
// document.addEventListener("click", function () {
//   clickCount++;
//   updateClickCount();
// });

//! Task 4
//Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу

// const applyCallbackToEachElement = (arr, callback) => {
//   const resultArray = [];
//   for (const num of arr) {
//     resultArray.push(callback(num));
//   }
//   return resultArray;
// };

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (num) => {
//   return num * num;
// };
// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result); //[1,4,9,16,25]

//! Task 5
//Розрахунок дисконтної ціни

// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

// const calculateDiscounteedPrice = (price, discount, callback) => {
//   const discountedPrice = price - price * (discount / 100);
//   callback(discountedPrice);
// };

// const showDiscountedPrice = (discountedPrice) => {
//   console.log(`Discounted price: $${discountedPrice}`);
// };
// calculateDiscounteedPrice(100, 10, showDiscountedPrice);
