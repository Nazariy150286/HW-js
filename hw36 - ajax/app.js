const API_URL = "https://restcountries.com/v2/name/";
const input = document.querySelector("#country-input");
const searchButton = document.querySelector("#search-button");
const resultsContainer = document.querySelector("#results");
const countryInfoContainer = document.querySelector("#country-info");

// Функція для отримання даних з API
const fetchCountries = async (name) => {
  const response = await fetch(`${API_URL}${name}`);
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
};

// Функція для рендерингу результатів пошуку
const renderCountries = (countries) => {
  resultsContainer.innerHTML = "";
  countryInfoContainer.innerHTML = "";

  // Якщо знайдено більше ніж 10 країн
  if (countries.length > 10) {
    PNotify.notice({
      text: "Too many matches found. Please enter a more specific query.",
    });
    return;
  }

  // Якщо знайдено більше ніж 1 країну
  if (countries.length > 1) {
    const list = document.createElement("ul");
    countries.forEach((country) => {
      const listItem = document.createElement("li");
      listItem.textContent = country.name;
      list.appendChild(listItem);
    });
    resultsContainer.appendChild(list);
    return;
  }

  // Якщо знайдена лише одна країна
  if (countries.length === 1) {
    const country = countries[0];
    const { name, capital, population, languages, flag } = country;

    const languagesList = languages.map((lang) => lang.name).join(", ");

    countryInfoContainer.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Capital:</strong> ${capital}</p>
      <p><strong>Population:</strong> ${population}</p>
      <p><strong>Languages:</strong> ${languagesList}</p>
      <img src="${flag}" alt="Flag of ${name}" />
    `;
  }
};

searchButton.addEventListener("click", async () => {
  const query = input.value.trim();

  if (!query) {
    resultsContainer.innerHTML = "";
    countryInfoContainer.innerHTML = "";
    PNotify.alert({ text: "Please enter a country name." });
    return;
  }

  try {
    const countries = await fetchCountries(query);
    renderCountries(countries);
  } catch (error) {
    PNotify.alert({
      text: "Failed to fetch country data. Please try again later.",
    });
  }
});
