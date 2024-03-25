console.log(1);

("use strict");
window.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector("[data-action='open-modal']");
  const closeModalBtn = document.querySelector("[data-action='close-modal']");
  const modal = document.querySelector(".js-backdrop");

  openModalBtn.addEventListener("click", () => {
    document.body.classList.add("show-modal");
  });

  closeModalBtn.addEventListener("click", () => {
    document.body.classList.remove("show-modal");
  });
});
