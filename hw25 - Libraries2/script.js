"use strict";
const key = document.getElementById("key");
const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let currentKeyIndex = 0;

const newGame = () => {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  key.textContent = keys[currentKeyIndex];
  PNotify.alert({
    text: "Нова гра розпочата, натисніть правильну клавішу",
    delay: 2000,
  });
};

document.getElementById("newGameButton").addEventListener("click", newGame);

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toUpperCase();
  const correctKey = keys[currentKeyIndex];

  if (pressedKey === correctKey) {
    PNotify.alert({
      text: "Правильно! Натиснута клавіша: " + correctKey,
      delay: 2000,
    });

    currentKeyIndex = Math.floor(Math.random() * keys.length);
    document.getElementById("key").textContent = keys[currentKeyIndex];
  } else {
    PNotify.alert({
      text: "Неправильна клавіша, српобуйте ще раз!",
      delay: 2000,
    });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

newGame();
//

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Кількість продажів",
        },
      },
      x: {
        title: {
          display: true,
          text: "Дні місяця",
        },
      },
    },
  },
};

const salesChart = new Chart(document.getElementById("salesChart"), config);
