// Дз з середи
//TODO ДЗ -  Отримати дані про фільм за допомогою OMDB API Опис: Використайте публічне API OMDB для отримання даних про фільм. Зробіть GET-запит за адресою http://www.omdbapi.com/?apikey={API_KEY}&t={movie_title}, де {API_KEY} - ваш ключ API OMDB, а {movie_title} - назва фільму. Перегляньте отримані дані щодо фільму.

const API_KEY = "9f24760e";
const movieTitle = "Inception";

const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movieTitle}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const title = data.Title;
    const year = data.Year;
    const plot = data.Plot;

    document.getElementById("movie-info").innerHTML = `
      <h1>${title} (${year})</h1>
      <p>${plot}</p>
    `;
    console.log("Данні про фільм");
    console.log(data);
  })
  .catch((error) => {
    console.error(`Сталася помилка: ${error}`);
  });

//TODO Домашнє завдання

// Використовуючи API Pixabay (https://pixabay.com/service/about/api/), розробіть просту веб-сторінку, яка дозволить користувачам переглядати список зображень з розділу "Editor's Choice" (вибір редакції). Необхідно реалізувати пагінацію для поділу зображень на окремі сторінки.

// Кроки для виконання завдання:

// Ознайомтесь з документацією API Pixabay і отримайте API-ключ для доступу до даних.
// Створіть веб-сторінку з основною структурою HTML, яка буде містити список зображень та кнопку Завантажити ще.
// Напишіть функцію або клас, яка виконуватиме запити до API Pixabay, передаючи необхідні параметри, такі як API-ключ, тип запиту та номер сторінки.
// Використайте отримані дані для відображення зображень на сторінці.
// Встановіть обмеження кількості зображень, які будуть відображатись на одній сторінці.
// Реалізуйте пагінацію, яка включатиме кнопку "Завантажити ще"
// При кліці на кнопку "Завантажити ще" виконайте відповідний запит до API Pixabay і оновіть список зображень на новій сторінці.
// Додайте стилізацію до сторінки, щоб покращити її вигляд та користувацький досвід.
// Завершіть сторінку додатковими функціями, наприклад, можливістю зберігати стан пагінації при перезавантаженні сторінки або додатковими фільтрами для зображень.
// Протестуйте вашу веб-сторінку, переконайтесь, що пагінація працює належним чином та зображення відображаються правильно на різних сторінках.
const MY_API_KEY = "47586730-7b74be86dd2169ea527666f62";
const BASE_URL = "https://pixabay.com/api/";
const PROXY_URL = "https://api.allorigins.win/raw?url=";
let currentPage = 1;
const perPage = 12;
const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("load-more");

async function fetchImages(page) {
  try {
    const url = `${PROXY_URL}${encodeURIComponent(
      BASE_URL
    )}?key=${MY_API_KEY}&editors_choice=true&page=${page}&per_page=${perPage}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data.hits && data.hits.length > 0) {
      renderImages(data.hits);
    } else {
      loadMoreBtn.style.display = "none";
    }
  } catch (error) {
    console.error("Помилка під час запиту:", error);
  }
}

const renderImages = (images) => {
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    gallery.appendChild(imgElement);
  });
};

loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  fetchImages(currentPage);
});

fetchImages(currentPage);
