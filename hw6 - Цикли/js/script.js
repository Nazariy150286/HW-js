"use strict";

//! 1 Task
//Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
// let myNumber = 1;
// while (myNumber <= 10) {
//   console.log(myNumber);
//   myNumber += 1;
// }

//! Task 2
//Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
// let myNumber = 20;
// for (let i = 2; i <= myNumber; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }
//   console.log("Парне число: ", i);
// }

//! Task 3
//Вивести на екран таблицю множення числа 7 за допомогою циклу for.
// let myNumber = 7;

// for (let i = 1; i <= 10; i++) {
//   const result = myNumber * i;
//   console.log(`${myNumber} * ${i} = ${result}`);
// }

//! Task 4
//Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.

// let massive = [1, 2, 3, 4, 5];
// let index = 0;

// while (index < massive.length) {
//   console.log(massive[index]);
//   index++;
// }

//! Task 5
//Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.

// let massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < massive.length; i++) {
//   if (massive[i] !== 7) {
//     console.log(massive[i]);
//   } else {
//     break;
//   }
// }

//! Task 6
//Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою
// function checkNumbersLessThanN(n) {
//   for (var i = 0; i < n; i++) {
//     console.log(i);
//     if (i >= n) {
//       break;
//     }
//   }
// }

// var n = 10;
// checkNumbersLessThanN(n);

//! Task 7
//За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

// var i = 1;
// while (i <= 20) {
//   if (i % 3 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }
