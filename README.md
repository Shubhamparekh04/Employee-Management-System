# 👨‍💼 Employee Management System (React)

A simple yet fully functional Employee Management System built with React and Bootstrap. This project supports adding, editing, and deleting employee records — with data stored in component state.

---

## 📸 Screenshot

> _You can add a screenshot here if needed (optional)_

---

## 🚀 Live Link

No live deployment yet. Run it locally using instructions below.

---

## 📂 Project Structure


Employee-Management-System/
├── public/
│ └── index.html
├── src/
│ └── App.js
├── package.json
├── vite.config.js
└── README.md



---

## 📦 Installation & Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Shubhamparekh04/Employee-Management-System.git
cd Employee-Management-System


2. Install Dependencies
bash
Copy
Edit
npm install

3. Run the App Locally
bash
Copy
Edit
npm run dev

🛠 Tech Stack Used
⚛️ React (Functional Components & Hooks)

🎨 Bootstrap 5 (CDN or via index.html)

🛠 Vite (React starter)

🧠 useState for state management



✨ Features
➕ Add Employee

📝 Edit Employee

❌ Delete Employee

✅ Form Validation

📄 Dynamic Department Selection (checkboxes)

📊 Table View of All Employees

💻 Responsive Layout




| Field      | Type         | Options                  | Required |
| ---------- | ------------ | ------------------------ | -------- |
| Name       | Text         | -                        | ✅        |
| Gender     | Radio        | Male / Female            | ✅        |
| Department | Checkbox(es) | HR / IT / Marketing      | ❌        |
| Salary     | Number       | ₹25,000 - ₹1,00,000      | ✅        |
| City       | Dropdown     | Surat / Navsari / Valsad | ✅        |
| Address    | Textarea     | -                        | ✅        |



🔍 How It Works
🔁 State Variables
empData: stores the form input data.

empList: holds all employee records.

editId: stores the ID of the employee being edited.

📝 Form Handling
handleChange() updates input fields.

Department checkboxes are stored in an array.

handleSubmit():

Adds a new employee if not in edit mode.

Updates existing employee if editing.

🧹 Resetting
After submission or update, the form is reset using setEmpData({}).

🗑️ Deletion
handleDelete() removes employee based on ID.

✏️ Editing
handleEdit() loads selected employee into the form for updating.


