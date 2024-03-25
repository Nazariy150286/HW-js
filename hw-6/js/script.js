"use strict";
//! 1 Task

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("colorForm");
//   const radios = form.querySelectorAll('input[type="radio"]');

//   radios.forEach(function (radio) {
//     radio.addEventListener("change", changeColor);
//   });

//   function changeColor() {
//     document.querySelector(".bg").style.backgroundColor = this.value;
//   }
//   function changeColor() {
//     document.querySelector(".bg2").style.backgroundColor = this.value;
//   }

//   function changeColor() {
//     document.querySelector(".bg3").style.backgroundColor = this.value;
//   }
// });
//! Скрипт ніби працює але є помилка з bg, воно не зрозуміло як визначає на який саме елемент обирати

//! 2 Task

// const yourName = document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");
// const userName = "Знову привіт, друже ";

// yourName.addEventListener("input", function () {
//   if (yourName.value.trim() === "") {
//     yourName.textContent = "Незнайомець";
//   } else nameOutput.textContent = yourName.value;
// });

//! 3 Task
// Зробити так щоб коли натискаєш на клавіші вгору вниз квадратик пересувався відповідно
//

// Скрипт для клавіш вгору та вниз
//document.addEventListener("DOMContentLoaded", function () {
//   const square = document.getElementById("square");
//   let topPosition = 2;

//   // Обробник події для клавіші "вниз"
//   document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowDown") {
//       topPosition += 10; // Збільшуємо вертикальну позицію
//       square.style.top = topPosition + "px"; // Задаємо нову позицію квадратику
//     }
//   });

//   // Обробник події для клавіші "вгору"
//   document.addEventListener("keyup", function (event) {
//     if (event.key === "ArrowUp") {
//       topPosition -= 10; // Зменшуємо вертикальну позицію
//       square.style.top = topPosition + "px"; // Задаємо нову позицію квадратику
//     }
//   });
// });

// Функція яка повністю дозволить нам рухати квадратиком :)
// document.addEventListener("DOMContentLoaded", function () {
//   const square = document.getElementById("square");
//   let topPosition = 0;
//   let leftPosition = 0;
//   const step = 10; // Крок переміщення квадратика

//   // Функція для перевірки меж
//   function checkBoundaries() {
//     const rect = square.getBoundingClientRect();
//     const maxX = window.innerWidth - rect.width;
//     const maxY = window.innerHeight - rect.height;
//     if (leftPosition < 0) {
//       leftPosition = 0;
//     }
//     if (leftPosition > maxX) {
//       leftPosition = maxX;
//     }
//     if (topPosition < 0) {
//       topPosition = 0;
//     }
//     if (topPosition > maxY) {
//       topPosition = maxY;
//     }
//   }

//   // Обробник події для клавіш "вниз", "вгору", "вправо", "вліво"
//   document.addEventListener("keydown", function (event) {
//     switch (event.key) {
//       case "ArrowDown":
//         topPosition += step;
//         break;
//       case "ArrowUp":
//         topPosition -= step;
//         break;
//       case "ArrowLeft":
//         leftPosition -= step;
//         break;
//       case "ArrowRight":
//         leftPosition += step;
//         break;
//     }
//     checkBoundaries();
//     square.style.top = topPosition + "px";
//     square.style.left = leftPosition + "px";
//   });
// })

//! 4 Task
// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
// document.addEventListener("DOMContentLoaded", function () {
//   const valInput = document.getElementById("validation-input");
//   valInput.addEventListener("blur", function () {
//     const expectedLength = parseInt(valInput.getAttribute("data-length"));
//     const actualLength = valInput.value.length;

//     if (actualLength === expectedLength) {
//       valInput.classList.remove("invalid");
//       valInput.classList.add("valid");
//     } else {
//       valInput.classList.remove("valid");
//       valInput.classList.add("invalid");
//     }
//   });
// });

//! 5 Task
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

// document.addEventListener("DOMContentLoaded", function () {
//   const fontSizeControl = document.getElementById("font-size-control");
//   const text = document.getElementById("text");

//   // Додаємо обробник події "input" до повзунка
//   fontSizeControl.addEventListener("input", function () {
//     // Змінюємо розмір шрифту тексту залежно від значення повзунка
//     text.style.fontSize = fontSizeControl.value + "px";
//   });
// });

//! Task 4.1
//Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

// function checkNumbers() {
//   var numberValue1 = document.getElementById("number1").value.trim();
//   var numberValue2 = document.getElementById("number2").value.trim();

//   if (numberValue1 !== "" && numberValue2 !== "") {
//     alert("Обидва поля заповнені");
//   } else {
//     alert("Не всі поля заповнені");
//   }
// }

//! Task 4.2
//Створити розмітку  з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
// function checkSum() {
//   var num1 = parseFloat(document.getElementById("num1").value);
//   var num2 = parseFloat(document.getElementById("num2").value);
//   var sum = num1 + num2;
//   if (sum > 10) {
//     alert("Сума більша 10");
//   } else {
//     alert("Сума менша або дорівнює 10");
//   }
// }

//! Task 4.3
//  Створити розмітку  з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

// function checkField() {
//   var textField = document.getElementById("textField").value;
//   if (textField.includes("JavaScript")) {
//     alert("Текст містить слово JavaScript");
//   } else {
//     alert("Текст не містить слово JavaScript");
//   }
// }

//! Task 4.4
//Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".

// function checkNumber() {
//   var inputNumber = document.getElementById("formInput").value;
//   if (inputNumber > 10 && inputNumber < 20) {
//     alert("Число входить в діапазон від 10 до 20");
//   } else {
//     alert("Число не входить в діапазон від 10 до 20");
//   }
// }

//! Task 4.5
//Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.

// function checkInputs() {
//   var inputName = document.getElementById("inputName").value;
//   var inputEmail = document.getElementById("inputEmail").value;
//   var inputPass = document.getElementById("inputPass").value;
//   if (
//     inputName.trim() === "" ||
//     inputEmail.trim() === "" ||
//     inputPass.trim() === ""
//   ) {
//     alert("Будь ласка, заповніть усі поля!");
//     return;
//   }

//   if (inputName < 3) {
//     alert("Ім'я має містити не менше 3 символів");
//     return;
//   }
//   if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
//     alert("Будь ласка, введіть правильний Email!");
//     return;
//   }
//   if (inputPass.length < 6) {
//     alert("Пароль повинен скаладтись мінімум з 6 символів");
//     return;
//   }
//   window.location.href = "https://github.com/";
// }
