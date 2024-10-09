"use strict";
const users = [
  {
    name: "Іван Петров",
    email: "ivan.petrov@example.com",
    age: 25,
  },
  {
    name: "Марія Сидоренко",
    email: "maria.sydorenko@example.com",
    age: 30,
  },
  {
    name: "Олександр Коваленко",
    email: "oleksandr.kovalenko@example.com",
    age: 28,
  },
  {
    name: "Анна Грищенко",
    email: "anna.hryshchenko@example.com",
    age: 22,
  },
  {
    name: "Павло Шевченко",
    email: "pavlo.shevchenko@example.com",
    age: 35,
  },
];

const source = `
    {{#each this}}
        <tr>
            <td>{{name}}</td>
            <td>{{email}}</td>
            <td>{{age}}</td>
        </tr>
    {{/each}}
`;

const template = Handlebars.compile(source);

const userTableBody = template(users);

document.getElementById("userTableBody").innerHTML = userTableBody;
