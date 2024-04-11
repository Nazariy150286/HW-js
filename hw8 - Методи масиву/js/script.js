"use strict";
// const message = "Hello World Broo!";
// console.log(message.split(""));

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.join(" "));
// console.log(clients.join(","));
// console.log(clients.join("-"));

// const clients = ["Mango", "Poly", "Ajax" ];
// console.log(clients.indexOf("Poly"));
// console.log(clients.indexOf("Monkong"));
// const clients = ["Mango", "Poly", "Ajax", "Kiwi"];
// console.log(clients.includes("Poly"));
// console.log(clients.includes("Monkong"));

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// if (redFruits.includes(fruit)) {
//   console.log("It is a red fruit!");
// }

// const stack = [];
// stack.push(1);
// console.log(stack);
// stack.push(2);
// console.log(stack);
// stack.push(3);
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);
// console.log(stack.pop());
// console.log(stack);
// console.log(stack.pop());
// console.log(stack);

// console.log(stack.pop());

//TODO Homework
//! Task 1
// Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
//? через for
// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";
// for (let i = 0; i < friends.length; i++) {
//   string += friends[i];
//   if (i !== friends.length - 1) {
//     string += ", ";
//   }
// }

// console.log(string);

//? через join

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// console.log(friends.join(", "));

//! Task 2
// Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];

// // ? splise(position, num) | щоб видалити елемент з масиву
// // position - вказувати позицію (індекс) першого елемента для видалення
// // num - кількість елементів що видаляються

// // const deletedCards = cards.splice(0, 3);
// // console.log(cards);
// // ? щоб додати елементи в масив
// cards.splice(5, 0, "Карточка-6");
// console.log(cards);
// // ? щоб замінити елемент в масиві

// console.log(cards.splice(1, 1, ""));

//! Task 3
//Delete
// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];
// const cardToRemove = "Карточка-3";
// const remotedCard = cards.indexOf(cardToRemove);

// if (cardToRemove !== -1) {
//   cards.splice(2, 1);
// }

// console.log(cards);

//! Task 4
// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];

// cards.splice(5, 0, "Карточка-6  ");
// console.log(cards);

//! Task 5
// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];

// cards.splice(2, 1, "Карточка-4");
// console.log(cards);
