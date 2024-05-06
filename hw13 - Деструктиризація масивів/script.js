"use strict";
//? Task 1
// const user = {
//   name: "John",
//   age: 30,
//   hobby: "singing",
//   premium: true,
// };

// const {
//   name: userName,
//   age: userAge,
//   hobby: userHobby,
//   premium: userPremium,
// } = user;
// console.log(name,age,hobby,premium);

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

//? Task 2

// function countProps(obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// }

// const user = {
//   name: "John",
//   age: 30,
//   email: "john@.gmail.com",
// };
// const { name: userName, age: userAge, email: userEmail } = user;
// console.log(name,age,email);

// console.log(countProps(user));

//? Task 3
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
// const {
//   Катя: employeeKate,
//   Андрій: employeeAndr,
//   Юля: employeeYulia,
//   Назар: employeeNazar,
// } = employees;
// console.log(Катя,Андрій,Юля,Назар);

// const bestEmployee = findBestEmployee(employees);
// console.log(`Найпродуктивніший співробітник: ${bestEmployee}`);

//?Task 4

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
// const {
//   David: employeeDavid,
//   Max: employeeMax,
//   Kate: employeeKate,
//   Mary: employeeMary,
// } = employees;
// console.log(David, Max, Kate, Mary);

// const totalSum = countTotalSalary(employees);
// console.log(`Загальна сума зарплати працівників: ${totalSum}`);

//? Task 5
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
// const [
//   { name: nameArr1, age: ageArr1 },
//   { name: nameArr2, age: ageArr2 },
//   { name: nameArr3, age: ageArr3 },
// ] = arr;
// console.log(nameArr1, ageArr1);
// console.log(nameArr2, ageArr2);
// console.log(nameArr3, ageArr3);
// const propValues = getAllPropValues(arr, "name");
// console.log(`Names: ${propValues}`);

//? Task 6
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

// const [
//   { name: productName, price: productPrice, quantity: productQuantity },
//   { name: productName2, price: productPrice2, quantity: productQuantity2 },
//   { name: productName3, price: productPrice3, quantity: productQuantity3 },
// ] = allProducts;

// console.log(productName, productPrice, productQuantity);
// console.log(productName2, productPrice2, productQuantity2);
// console.log(productName3, productPrice3, productQuantity3);

// const totalPrice = calculateTotalPrice(allProducts, "apple"); // "apple/orange/mango"
// console.log(`Загальна вартість яблук: ${totalPrice}`);

//!Task 7
//TODO  Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const account = {
  balance: 0,
  transactions: [],

  addTransaction(amount, type) {
    this.transactions.push({ amount, type });
    if (type === "deposit") {
      this.balance += amount;
    } else if (type === "withdraw") {
      this.balance -= amount;
    }
  },
  getBalance() {
    return this.balance;
  },
  getTransactionHistory() {
    return this.transactions;
  },
};

account.addTransaction(100, "deposit");
account.addTransaction(50, "withdraw");
account.addTransaction(30, "deposit");

console.log("Поточний баланс: ", account.getBalance());
console.log("Історія транзакцій: ", account.getTransactionHistory());
