"use strict";
// Завдання 1

//TODO Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)

document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery .image");
  const fullImageContainer = document.createElement("div");
  const fullImage = document.createElement("img");

  fullImageContainer.classList.add("full-image-container");
  fullImage.classList.add("full-image");

  fullImageContainer.appendChild(fullImage);
  document.body.appendChild(fullImageContainer);
  let currentIndex = 0;

  galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentIndex = index;
      openImage(image.src);
    });

    fullImageContainer.addEventListener("click", () => {
      closeImage();
    });

    document.addEventListener("keydown", (event) => {
      if (fullImageContainer.style.display === "flex") {
        if (event.ley === "ArrowRight") {
          currentIndex = (currentIndex + 1) % galleryImages.length;
          openImage(galleryNames[currentIndex].src);
        } else if (event.key === "ArrowLeft") {
          currentIndex =
            (currentIndex - 1 + galleryImages.length) % galleryImages.length;
          openImage(galleryImages[currentIndex].src);
        } else if (event.key === "Escape") {
          closeImage();
        }
      }
    });

    function openImage(src) {
      fullImage.src = src;
      fullImageContainer.style.display = "flex";
    }

    function closeImage() {
      fullImageContainer.style.display = "none";
    }
  });
});

// Завдання 2
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px

// Створи функцію destroyBoxes(), яка очищає div#boxes.

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  const initialSize = 30;
  const sizeIncrement = 10;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${initialSize + i * sizeIncrement}px`;
    box.style.height = `${initialSize + i * sizeIncrement}px`;
    box.style.background = getRandomRgbColor();
    box.classList.add("box");
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.getElementById("renderBtn").addEventListener("click", () => {
  const amount = parseInt(document.getElementById("numberInput").value, 10);
  if (!isNaN(amount) && amount > 0) {
    createBoxes(amount);
  }
});

document.getElementById("destroyBtn").addEventListener("click", destroyBoxes);
