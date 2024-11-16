//TODO Завдання 1 Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

// let count = 0;
// const message = setInterval(() => {
//   alert("Message");
//   count++;
//   if (count === 5) {
//     clearInterval(message);
//     alert("Це останнє сповіщення");
//   }
// }, 1000);

//TODO Завдання 2 Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

// const cat1 = document.getElementById("cat1");
// let isLarge = false;

// const animation1 = setInterval(() => {
//   cat1.style.transition = "3s";
//   if (isLarge) {
//     cat1.style.width = "100px";
//   } else {
//     cat1.style.width = "400px";
//   }
//   isLarge = !isLarge;
// }, 1000);

// const catText = document.getElementById("cat-text");
// let catStyle1 = false;

// const animation2 = setInterval(() => {
//   catText.style.transition = "3s";

//   if (catStyle1) {
//     catText.style.fontSize = "20px";
//     catText.style.color = "red";
//   } else {
//     catText.style.fontSize = "200px";
//     catText.style.color = "pink";
//   }
//   catStyle1 = !catStyle1;
// }, 2000);

// const cat2 = document.getElementById("cat2");
// let isLarge2 = false;
// let count = 0;

// const catAnimation2 = setInterval(() => {
//   cat2.style.transition = "3s";
//   if (isLarge2) {
//     cat2.style.marginLeft = "0px";
//     cat2.style.transform = "rotate(0deg)";
//     cat2.style.width = "100px";
//   } else {
//     cat2.style.marginLeft = "200px";
//     cat2.style.transform = "rotate(360deg)";
//     cat2.style.width = "300px";
//   }
//   isLarge2 = !isLarge2;
// }, 3000);

//TODO Завдання 3 Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

// const target = document.getElementById("target");
// const scoreDisplay = document.getElementById("score");
// const clicksDisplay = document.getElementById("clicks");
// const timerDisplay = document.getElementById("timer");

// let score = 0;
// let clicks = 0;
// let timeLeft = 10;

// const moveTarget = () => {
//   const x = Math.floor(Math.random() * (window.innerWidth - 50));
//   const y = Math.floor(Math.random() * (window.innerHeight - 50));

//   target.style.left = `${x}px`;
//   target.style.top = `${y}px`;
// };

// const countdown = setInterval(() => {
//   timeLeft--;
//   timerDisplay.textContent = `Час: ${timeLeft}`;

//   if (timeLeft <= 0) {
//     clearInterval(countdown);
//     clearInterval(gameInterval);
//     target.style.display = "none";
//     alert(`Гра закінчена! Ваш рахунок: ${score}`);
//   }
// }, 1000);

// const gameInterval = setInterval(moveTarget, 1000);

// target.addEventListener("click", () => {
//   score++;
//   clicks++;
//   scoreDisplay.textContent = score;
//   clicksDisplay.textContent = cliks;
// });

//TODO Завдання 4 Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (усекундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щобпісля встановленого часу вивести повідомлення.

document.getElementById("startButton").addEventListener("click", () => {
  const timeInSeconds = parseInt(document.getElementById("timeInput").value);

  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    alert("Будь ласка, введіть коректний час у секундах.");
    return;
  }

  setTimeout(() => {
    document.getElementById(
      "message"
    ).textContent = `Час вийшов! Ваш час: ${timeInSeconds} секунд(и)`;
  }, timeInSeconds * 1000);
});
