"use strict";
//? Task 1
//TODO Напиши скрипт, який, для об'єкта user, послідовно:

//* додає поле mood зі значенням 'happy'
//* замінює значення hobby на 'skydiving'
//* замінює значення premium на false
//* виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 30,
//   hobby: "singing",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

//? Task 2
//TODO Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

// function countProps(obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// }

// const user = {
//   name: "John",
//   age: 30,
//   email: "john@.gmail.com",
// };

// console.log(countProps(user));

//? Task 3
//TODO Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

// function findBestEmployee(employees) {
//   let bestEmployee = "";
//   let maxTasks = 0;
//   for (let employee in employees) {
//     if (employees.hasOwnProperty(employee)) {
//       const taskCompleted = employees[employee];

//       if (taskCompleted > maxTasks) {
//         maxTasks = taskCompleted;
//         bestEmployee = employee;
//       }
//     }
//   }
//   return bestEmployee;
// }
// const employees = {
//   Катя: 18,
//   Андрій: 15,
//   Юля: 23,
//   Назар: 16,
// };
// const bestEmployee = findBestEmployee(employees);
// console.log(`Найпродуктивніший співробітник: ${bestEmployee}`);

//? Task 4
//TODO Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

// function countTotalSalary(employees) {
//   let totalSum = 0;
//   for (let employee in employees) {
//     if (employee in employees) {
//       totalSum += employees[employee];
//     }
//   }
//   return totalSum;
// }

// const employees = {
//   David: 3500,
//   Max: 4750,
//   Kate: 3300,
//   Mary: 2500,
// };

// const totalSum = countTotalSalary(employees);
// console.log(`Загальна сума зарплати працівників: ${totalSum}`);

//? Task 5
//TODO Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// function getAllPropValues(arr, prop) {
//   let propValues = [];
//   for (let obj of arr) {
//     if (obj.hasOwnProperty(prop)) {
//       propValues.push(obj[prop]);
//     }
//   }
//   return propValues;
// }

// const arr = [
//   {
//     name: "John",
//     age: 23,
//   },
//   {
//     name: "David",
//     age: 25,
//   },
//   {
//     name: "Kate",
//     age: 29,
//   },
// ];

// const propValues = getAllPropValues(arr, "name");
// console.log(`Names: ${propValues}`);

//? Task 6

//TODO Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість). Викличи функції для перевірки працездатності твоєї реалізації.

// function calculateTotalPrice(allProducts, productName) {
//   let totalPrice = 0;
//   for (let product of allProducts) {
//     if (product.name === productName) {
//       totalPrice += product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }

// const allProducts = [
//   {
//     name: "apple",
//     price: 5,
//     quantity: 22,
//   },
//   {
//     name: "orange",
//     price: 12,
//     quantity: 15,
//   },
//   {
//     name: "mango",
//     price: 33,
//     quantity: 10,
//   },
// ];

// const totalPrice = calculateTotalPrice(allProducts, "apple"); // "apple/orange/mango"
// console.log(`Загальна вартість яблук: ${totalPrice}`);
