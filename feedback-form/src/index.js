import { saveFeedback } from "./feedbackStorage.js";

const form = document.getElementById("feedbackForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  saveFeedback({ name, email, message });

  successMessage.classList.remove("hidden");
  form.reset();

  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 3000);
});
