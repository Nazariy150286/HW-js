"use strict";
//? Task 1
//TODO     Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку

// const bankAccount = {
//   ownerName: "Nazariy",
//   accountNumber: "2872",
//   balance: 0,
//   deposit(amount) {
//     this.balance += amount;
//     alert(
//       "Рахунок поповнено на " +
//         amount +
//         " грн\n" +
//         "Поточний залишок: " +
//         this.balance +
//         " грн"
//     );
//   },
//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       alert(
//         "Знято " +
//           amount +
//           " грн з рахунку\n" +
//           "Поточний залишок: " +
//           this.balance +
//           " грн"
//       );
//     } else {
//       alert("Недостатньо коштів на рахунку");
//     }
//   },
// };

// function depositMoney() {
//   let amount = parseFloat(prompt("Введіть суму для поповнення:"));
//   bankAccount.deposit(amount);
//   updateBalance();
// }

// function withdrawMoney() {
//   let amount = parseFloat(prompt("Введіть суму для зняття:"));
//   bankAccount.withdraw(amount);
//   updateBalance();
// }

// function updateBalance() {
//   document.getElementById("balance").textContent = bankAccount.balance;
// }

//? Task 2
//TODO Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

// const weather = {
//   temperature: 0,
//   humidity: 0,
//   windSpeed: 0,
//   checkTemperature() {
//     let temperatureInput = parseFloat(
//       document.getElementById("temperature").value
//     );
//     if (temperatureInput < 0) {
//       alert("Температура нижче 0 градусів Цельсія");
//     } else {
//       alert("Температура вище або рівна  0 градусів Цельсія");
//     }
//   },
// };

// function checkTemperature() {
//   weather.checkTemperature();
// }

//? Task 3
//TODO Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

// let user = {
//   name: "Nazariy",
//   email: "nazarij@gmail.com",
//   password: "12345678",
//   login: function () {
//     let inputEmail = document.getElementById("email").value;
//     let inputPassword = document.getElementById("password").value;
//     if (inputEmail === this.email && inputPassword === this.password) {
//       alert("Успішний вхід!");
//     } else {
//       alert("Неправильний email або пароль!");
//     }
//   },
// };

//? Task 4
//TODO Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений

// const movie = {
//   title: "Захар Беркут",
//   direсtor: "Ахтем Шевкетович",
//   year: 2019,
//   rating: 10,
//   checkRating() {
//     return this.rating > 8;
//   },
// };

// document.getElementById("title").innerText = movie.title;
// document.getElementById("director").innerText = movie.direсtor;
// document.getElementById("year").innerText = movie.year;
// document.getElementById("rating").innerText = movie.rating;

// if (movie.checkRating()) {
//   document.getElementById("title").style.backgroundColor = "green";
// }
