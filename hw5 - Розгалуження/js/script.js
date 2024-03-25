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
function checkSeason() {
  var checkMonthNumber = document.getElementById("input-month-num").value;
  var season;

  switch (parseInt(checkMonthNumber)) {
    case 1:
    case 2:
    case 12:
      season = "Зима";
      break;
    case 3:
    case 4:
    case 5:
      season = "Весна";
      break;
    case 6:
    case 7:
    case 8:
      season = "Літо";
      break;

    case 9:
    case 10:
    case 11:
      season = "Осінь";
      break;
    default:
      season = "Невірний номер місяця!";
      break;
  }
  alert("Місяць " + checkMonthNumber + " належить до пори року: " + season);
}
