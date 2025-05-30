# Task 1 🗓️ Day Planner Web App

A simple yet functional day planner web app built using **HTML**, **CSS**, and **JavaScript**. It helps users manage daily tasks with due dates, search, and data backup features.

## 🚀 Features

- Add tasks with due date and time
- Auto-sorting of tasks by date & time
- Search tasks by keyword
- Filter tasks by date (daily view)
- Export and import task data as JSON
- Edit, delete, and complete task actions
- LocalStorage-based persistence (no backend needed)

## 📂 File Structure

project-folder/
│
├── index.html # Main HTML structure
├── style.css # Styling for the app
├── script.js # All interactivity and logic
└── README.md


## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## 📸 Preview

![image](https://github.com/user-attachments/assets/c641eae7-3335-43c7-8c05-e976d973aaae)

# Task 2 Blog Web App

A simple, full-featured blog web application built with Node.js, Express, MongoDB, and EJS templating.  
This project allows users to sign up, create, edit, delete, and view blog posts. It supports user authentication and pagination for blog posts.

---

## Features

- User Authentication (Signup, Login, Logout) using JWT and cookies
- Create, Read, Update, Delete (CRUD) operations on blog posts
- Pagination for browsing posts
- Responsive UI built with Bootstrap 5
- User authorization: users can only edit or delete their own posts
- Clean and intuitive UI with Bootstrap cards and navigation

---

## Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose ODM
- Authentication: JWT (JSON Web Tokens)
- Templating: EJS
- Styling: Bootstrap 5, custom CSS
- Other libraries: bcrypt for password hashing, dotenv for environment variables

## Installation

# 1.Clone the repository
git clone https://github.com/ssahibsingh/blog-website.git
#2.Navigate to project directory
cd blog-website
#3.Install dependencies
npm install
#4.Create a .env file in the root directory and add your environment variables:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
#5.Start the server
node app.js

## 🔧 Environment Variables
-Variable	Description
-MONGODB_URI	MongoDB connection string
-JWT_SECRET	Secret key for JWT token generation
-PORT	Port number for the server (default: 3000)

## Image Preview

![image](https://github.com/user-attachments/assets/98e8c53d-bd8b-45f1-b715-37b7724825bc)
