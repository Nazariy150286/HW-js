// TODO Завдання 1 Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.

// const timerDisplay = document.getElementById("timerDisplay");
// const messageDisplay = document.getElementById("message");

// let totalSeconds = 3600;

// const timerInterval = setInterval(() => {
//   totalSeconds--;

//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds % 60;

//   timerDisplay.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds
//     .toString()
//     .padStart(2, "0")}`;
//   if (totalSeconds === 1800) {
//     alert("Залишилось менше половини часу!");
//   }

//   if (totalSeconds === 0) {
//     clearInterval(timerInterval);
//     timerDisplay.textContent = "00:00:00";
//     messageDisplay.textContent = "Час вийшов";
//   }
// }, 1000);

//TODO Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду. При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.

const timerDisplay = document.getElementById("timerDisplay");
const messageDisplay = document.getElementById("message");
const restartButton = document.getElementById("restartButton");

let totalMilliseconds = 30000;

restartButton.disabled = true;

const timerInterval = setInterval(() => {
  totalMilliseconds--;

  const seconds = Math.floor(totalMilliseconds / 1000);
  const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
  timerDisplay.textContent = `${seconds
    .toString()
    .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;

  if (totalMilliseconds === 10000) {
    messageDisplay.textContent = "Залишилось 10 секунд!";
    timerDisplay.classList.add("animate");
  }

  if (totalMilliseconds <= 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = "00:00";
    messageDisplay.textContent = "Час вийшов!";
    timerDisplay.classList.remove("animate");
    restartButton.disabled = false;
  }
}, 0.1);

restartButton.addEventListener("click", () => {
  totalMilliseconds = 30000;
  restartButton.disabled = true;
  messageDisplay.textContent = "";
  timerDisplay.classList.remove("animate");
  setInterval(timerInterval, 0.1);
});
