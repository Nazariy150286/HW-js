const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Завантажити задачі з localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToDOM(task));
}

// Додати задачу в DOM
function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task.text;
  if (task.completed) {
    li.classList.add("completed");
  }

  li.addEventListener("click", () => {
    task.completed = !task.completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  });

  taskList.appendChild(li);
}

// Додати нову задачу
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = { text: taskInput.value, completed: false };
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  loadTasks();
});

// Завантажити задачі при запуску
loadTasks();

const dataForm = document.getElementById("dataForm");

// Завантажити дані з localStorage
function loadData() {
  const username = localStorage.getItem("username") || "";
  const password = localStorage.getItem("password") || "";
  usernameInput.value = username;
  passwordInput.value = password;
}

// Зберегти дані
dataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("username", username.value);
  localStorage.setItem("password", password.value);
  alert("Дані збережено!");
});

// Завантажити дані при запуску
loadData();

const bookmarkForm = document.getElementById("bookmarkForm");

// Завантажити закладки з localStorage
function loadBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarkList.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement("li");
    li.textContent = bookmark;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.addEventListener("click", () => {
      bookmarks.splice(index, 1);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      loadBookmarks();
    });
    li.appendChild(deleteButton);
    bookmarkList.appendChild(li);
  });
}

// Додати закладку
bookmarkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push(bookmarkInput.value);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  bookmarkInput.value = "";
  loadBookmarks();
});

// Завантажити закладки при запуску
loadBookmarks();

const contactForm = document.getElementById("contactForm");

// Завантажити контакти з localStorage
function loadContacts() {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contactList.innerHTML = "";
  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.textContent = `${contact.name} ${contact.surname}, ${contact.phone}, ${contact.email}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.addEventListener("click", () => {
      contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      loadContacts();
    });
    li.appendChild(deleteButton);
    contactList.appendChild(li);
  });
}

// Додати контакт
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const newContact = {
    name: contactName.value,
    surname: contactSurname.value,
    phone: contactPhone.value,
    email: contactEmail.value,
  };
  contacts.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  contactForm.reset();
  loadContacts();
});

// Завантажити контакти при запуску
loadContacts();
