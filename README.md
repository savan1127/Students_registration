# 🎓 Student Registration

A modern **Student Registration Form** built with **React ⚛️, Vite ⚡, and Tailwind CSS 🎨,** using **JSON Server** 🗄️ as a mock backend.

This project allows users to **register student information through a clean, responsive, and user-friendly interface.** It demonstrates important frontend concepts like **React form handling, component-based architecture, and API integration.**

---

## ✨ Features

🚀 Simple and clean UI

* 🧾 Student registration form
* 📱 Responsive layout
* ⚡ Fast development with Vite
* 🎨 Styled with Tailwind CSS
* 🗄️ Mock backend using JSON Server
* 🔄 Form interaction with smooth input focus effects


---

## 🖼️ Registration Form Fields

The registration form collects the following information:

* 👨‍🎓 Student Name
* 👨 Father Name
* 👩 Mother Name
* 🎂 Date of Birth
* ⚧ Gender
* 🏫 Class
* 📧 Email Address
* 📞 Phone Number
* 🏠 Address

---

## 🛠️ Tech Stack

| Technology      | Purpose                |
| --------------- | ---------------------- |
| ⚛️ React        | Frontend UI            |
| ⚡ Vite          | Development build tool |
| 🎨 Tailwind CSS | Styling                |
| 🗄️ JSON Server | Fake REST API          |
| 📜 JavaScript   | Application logic      |

---

## 📂 Project Structure

```
student-registration
│
├── public
│   └── image
│       └── febicon.png
│
├── src
│   ├── component
│   │   └── StudentRegistration.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/student-registration.git
```

### 2️⃣ Move into the project directory

```bash
cd student-registration
```

### 3️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

Your app will run at:

```
http://localhost:5173
```

---

## 🗄️ Start JSON Server (Mock API)

Run the following command:

```bash
npx json-server --watch db.json --port 3000
```

API endpoint:

```
http://localhost:3000/students-data
```
---

## 📌 Future Improvements

* ✨ Display registered students list
* ✏️ Edit student details
* 🗑️ Delete student records
* ✅ Form validation
* 🔐 Authentication system
* 🌐 Connect with real backend (Node.js / Express / MongoDB)

---

👨‍💻 Author

Rathod Savan

💻 Passionate Frontend Developer

---

⭐ If you like this project, consider giving it a **star** on GitHub!
