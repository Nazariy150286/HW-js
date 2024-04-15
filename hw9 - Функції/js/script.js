"use strict";
//! Task 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// function logItems(array) {
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i] + " -", i + 1);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);

//! Task 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   if (message.trim() === 0) {
//     return 0;
//   }
//   let words = message.split(" ");
//   let wordCount = words.length;
//   let totalPrice = wordCount * pricePerWord;

//   return totalPrice;
// }

// let message = "Hello World!";
// let pricePerWord = 10;
// let engravingPrice = calculateEngravingPrice(message, pricePerWord);
// console.log(engravingPrice);

//! Task 3
//Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   let words = string.split(" ");
//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// let string = "The quick brown fox jumps over the lazy dog";
// let longestWord = findLongestWord(string);
// console.log(longestWord); //quick

//! Task 4

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// function formatString(string) {
//   const maxLength = 40;
//   if (string.length <= maxLength) {
//     return string;
//   } else {
//     return string.slice(0, maxLength) + "...";
//   }
// }

// console.log(
//   formatString("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
// );

//! Task 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

// function checkForSpam(message) {
//   let lowerCaseMessage = message.toLowerCase();

//   if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkForSpam("Buy now, special sale!"));
// console.log(checkForSpam("Get a free iPhone, just for you!"));
// console.log(checkForSpam("SPAM ALERT! You've won a million dollars!"));

//! Task 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

// const numbers = [];
// let input;
// let total = 0;

// do {
//   input = prompt("Введіть число");
//   if (input === null) {
//     break;
//   }
//   input = Number(input);

//   if (isNaN(input)) {
//     alert("Було введено не число, спробуйте ще раз");
//   } else {
//     numbers.push(input);
//   }
// } while (input !== null);

// for (let number of numbers) {
//   total += number;
// }

// if (numbers.length > 0) {
//   console.log(`Загальна сума чисел дорівнює ${total}`);
// } else {
//   console.log("Масив чисел порожній");
// }

//! Task 7
// Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив logins. Логін, який додається повинен:

// проходити перевірку на довжину від 4 до 16-ти символів включно
// бути унікальним, тобто бути відсутнім в масиві logins

// const currentLogins = ["user1", "user2", "user3"];

// function isLoginValid(login) {
//   return login.length >= 4 && login.length <= 16;
// }

// function isLoginUnique(allLogins, login) {
//   return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//   if (!isLoginValid(login)) {
//     return "Помилка! Логін повинен бути від 4 до 16 символів!";
//   }
//   if (!isLoginUnique(allLogins, login)) {
//     return "Такий логін уже використовується";
//   }

//   allLogins.push(login);
//   return "Логін успішно додано!";
// }

// console.log(isLoginValid("user123"));
// console.log(isLoginValid("a"));
// console.log(isLoginValid("verylongUsername12345"));
