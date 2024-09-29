"use strict";

//* Функція для спостереження за зображенням

const lazyLoadImages = () => {
  const images = document.querySelectorAll("img.image");

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute("data-src");
          img.onload = () => {
            img.classList.add("loaded");
          };
          observer.unobserve(img); //* Припиняємо спостереження за завантаженим зображенням
        }
      });
    },
    {
      rootMargin: "0px 0px 100px 0px", //* Завантажувати трохи раніше, ніж вони стануть видимі
      threshold: 0.1,
    }
  );

  images.forEach((image) => {
    imageObserver.observe(image);
  });
};

//* Ініціалізація функції лінійного завантаження зображень при натисканні на кнопку

document
  .getElementById("load-images")
  .addEventListener("click", lazyLoadImages);

//* Завантаження зображень по дефолту при прокрутці сторінки
window.addEventListener("DOMContentLoaded", () => {
  lazyLoadImages();
});
