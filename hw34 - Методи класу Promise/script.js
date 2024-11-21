//TODO Завдання 1 "Порівняння кількох промісів" Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати. Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.Обробіть результати вирішення промісів та виведіть їх у консоль.

const delayedPromise = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
};

const promises = [
  delayedPromise("Promise 1 resolved", 1000),
  delayedPromise("Promise 2 resolved", 500),
  delayedPromise("Promise 3 resolved", 2000),
  delayedPromise("Promise 4 resolved", 1500),
  delayedPromise("Promise 5 resolved", 700),
];

Promise.all(promises).then((results) => {
  console.log("all");

  results.forEach((result, index) => {
    console.log(`Result${index + 1} : ${result} `);
  });
});

//TODO  Завдання 2

//TODO  "Змагання промісів"

//TODO  Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.

//TODO  Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
//TODO  Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
// TODO Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
//TODO  Обробіть результат найшвидшого проміса та виведіть його у консоль.

const randomDelay = (value) => {
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
};

Promise.race(promises)
  .then((result) => {
    console.log(`The fastest promise resolved with result: ${result}`);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
