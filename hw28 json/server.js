const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Файл для зберігання даних студентів
const DATA_FILE = "./data/students.json";

// Функція для читання даних з файлу
function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([])); // створити файл, якщо не існує
  }
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

// Додати нового студента
app.post("/students", (req, res) => {
  const students = readData();
  const newStudent = req.body;

  if (
    !newStudent.firstName ||
    !newStudent.lastName ||
    !newStudent.age ||
    !newStudent.course ||
    !newStudent.faculty
  ) {
    return res.status(400).send("Некоректні дані!");
  }

  students.push(newStudent);
  fs.writeFileSync(DATA_FILE, JSON.stringify(students));
  res.status(201).send(newStudent);
});

// Отримати всіх студентів
app.get("/students", (req, res) => {
  const students = readData();
  res.send(students);
});

// Видалити студента
app.delete("/students/:id", (req, res) => {
  const students = readData();
  const studentId = req.params.id;

  if (studentId >= students.length || studentId < 0) {
    return res.status(404).send("Студента не знайдено!");
  }

  students.splice(studentId, 1);
  fs.writeFileSync(DATA_FILE, JSON.stringify(students));
  res.send("Студента видалено!");
});

// Оновити студента
app.put("/students/:id", (req, res) => {
  const students = readData();
  const studentId = req.params.id;
  const updatedStudent = req.body;

  if (studentId >= students.length || studentId < 0) {
    return res.status(404).send("Студента не знайдено!");
  }

  students[studentId] = updatedStudent;
  fs.writeFileSync(DATA_FILE, JSON.stringify(students));
  res.send(updatedStudent);
});

// Запустити сервер
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
