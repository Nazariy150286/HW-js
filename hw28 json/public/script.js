const studentForm = document.getElementById("studentForm");
const studentsBody = document.getElementById("studentsBody");

// Додати студента
studentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newStudent = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    course: document.getElementById("course").value,
    faculty: document.getElementById("faculty").value,
  };

  await fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudent),
  });

  studentForm.reset();
  loadStudents();
});

// Завантажити студентів
async function loadStudents() {
  const response = await fetch("http://localhost:3000/students");
  const students = await response.json();
  studentsBody.innerHTML = "";

  students.forEach((student, index) => {
    const row = `
            <tr>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>
                <td>${student.faculty}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Видалити</button>
                    <button onclick="updateStudent(${index})">Оновити</button>
                </td>
            </tr>
        `;
    studentsBody.innerHTML += row;
  });
}

// Видалити студента
async function deleteStudent(id) {
  await fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  });
  loadStudents();
}

// Оновити студента
async function updateStudent(id) {
  const updatedStudent = {
    firstName: prompt("Нове ім'я"),
    lastName: prompt("Нове прізвище"),
    age: prompt("Новий вік"),
    course: prompt("Новий курс"),
    faculty: prompt("Новий факультет"),
  };

  await fetch(`http://localhost:3000/students/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedStudent),
  });
  loadStudents();
}

// Завантажити студентів при завантаженні сторінки
loadStudents();
