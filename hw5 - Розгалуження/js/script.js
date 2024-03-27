"use strict";
//! 1 Task
// function showMessage() {
//   const select = document.getElementById("beverage");
//   const messageDiv = document.getElementById("message");
//   const selectedOption = select.value;

//   let message = "";

//   switch (selectedOption) {
//     case "coffee":
//       message = "Ви обрали каву!";
//       break;
//     case "tea":
//       message = "Ви обрали чай!";
//       break;
//     case "juice":
//       message = "Ви обрали сік!";
//       break;
//     default:
//       message = "";
//   }

//   messageDiv.textContent = message;
// }

//! 2 Task
// function checkDay() {
//   var dayInput = document.getElementById("dayInput").value.toLowerCase();
//   var message = "";

//   switch (dayInput) {
//     case "понеділок":
//     case "вівторок":
//     case "середа":
//     case "четвер":
//     case "п'ятниця":
//       message += "Це робочий день! :)";
//       break;
//     case "субота":
//     case "неділя":
//       message += "Це вихіднииий!))";
//       break;
//     default:
//       message += "Введений рядок не є днем тижня!";
//   }
//   document.getElementById("outputMessage").innerText = message;
// }

//! 3 Task
// function checkSeason() {
//   var checkMonthNumber = document.getElementById("input-month-num").value;
//   var season;

//   switch (parseInt(checkMonthNumber)) {
//     case 1:
//     case 2:
//     case 12:
//       season = "Зима";
//       break;
//     case 3:
//     case 4:
//     case 5:
//       season = "Весна";
//       break;
//     case 6:
//     case 7:
//     case 8:
//       season = "Літо";
//       break;

//     case 9:
//     case 10:
//     case 11:
//       season = "Осінь";
//       break;
//     default:
//       season = "Невірний номер місяця!";
//       break;
//   }
//   alert("Місяць " + checkMonthNumber + " належить до пори року: " + season);
// }

//! 4 Task
//Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.

// function checkNumInMonth() {
//   var numberMonth = document.getElementById("numberMonth").value;
//   var daysInMonth;
//   switch (parseInt(numberMonth)) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       daysInMonth = "31";
//       break;

//     case 2:
//       daysInMonth = "28";
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       daysInMonth = "30";
//       break;
//   }
//   alert(`У вказаному місяці є ${daysInMonth} днів/день`);
// }

//! Task 5
//Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".

// function changeColor() {
//   var inputColor = document.getElementById("inputColor").value.toLowerCase();
//   var color = "";
//   switch (inputColor) {
//     case "червоний":
//       alert("стоп");
//       break;
//     case "зелений":
//       alert("йти");
//       break;
//     case "жовтий":
//       alert("чекати");
//       break;
//     default:
//       color = "Введіть один з трьох кольорів!";
//       alert(`${color}`);
//   }
// }

//! Task 6
//Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.

// function getResult() {
//   var num1 = parseFloat(document.getElementById("num1").value);
//   var num2 = parseFloat(document.getElementById("num2").value);
//   var opSelect = document.getElementById("opSelect").value;
//   var result;

//   if (isNaN(num1) || isNaN(num2)) {
//     alert("Будь ласка, введіть число");
//     return;
//   }
//   switch (opSelect) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;

//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       if (num2 === 0) {
//         alert("Ділити на нуль неможна!");
//       }
//       result = num1 / num2;
//       break;
//     default:
//       alert("Введіть дійсні значення!");
//       return;
//   }
//   alert(`Result: + ${result} `);
// }
