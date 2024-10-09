import template from "./template.hbs";

const data = [
  { id: 1, name: "Іван", email: "ivan@example.com" },
  { id: 2, name: "Марія", email: "maria@example.com" },
  { id: 3, name: "Петро", email: "petro@example.com" },
];

function renderData(data) {
  const renderedHTML = template({ users: data });
  document.getElementById("app").innerHTML = renderedHTML;
}

renderData(data);

function editUser(userId) {
  const user = data.find((user) => user.id === userId);
  const newName = prompt("Введіть нове ім'я:", user.name);
  const newEmail = prompt("Введіть нову електронну пошту:", user.email);

  if (newName && newEmail) {
    user.name = newName;
    user.email = newEmail;
    renderData(data);
  }
}

function filterData() {
  const filterValue = document.getElementById("filter").value.toLowerCase();
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(filterValue)
  );
  renderData(filteredData);
}
