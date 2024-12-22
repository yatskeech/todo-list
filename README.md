# 📝 TODO List

Welcome to the **TODO List** project! This application allows users to create, edit, delete, and filter tasks with ease. Designed with a sleek and modern interface, **TODO List** is built using React, JavaScript, Tailwind CSS, and Framer Motion, powered by the Vite build tool.

## Table of Contents
1. [📖 Project Overview](#-project-overview)
2. [✨ Features](#-features)
3. [📂 Project Structure](#-project-structure)
4. [🧩 Components](#-components)

## 📖 Project Overview
**TODO List** enables users to:

- ✅ Add tasks with a simple and intuitive interface.
- ✏️ Edit and delete tasks effortlessly.
- 🔎 Filter tasks by different criteria.
- 💾 Persist tasks across sessions using local storage.

This project combines the efficiency of Vite with the flexibility of React and Tailwind CSS to deliver a fast and responsive experience. Framer Motion adds smooth animations, enhancing user interaction.

## ✨ Features
- ✅ **Task Management**: Create, edit, delete, and mark tasks as completed.
- 🔄 **Filters**: Apply filters to view tasks based on their completion status.
- 💾 **Local Storage Integration**: Save tasks locally, ensuring data is retained even after refreshing the page.
- 🌈 **Modern Design**: Tailwind CSS provides a clean and responsive design.
- 🎥 **Smooth Animations**: Framer Motion adds fluid and visually appealing animations.
- ⚡ **Fast Build Tool**: Vite ensures rapid development and optimized builds.

## 📂 Project Structure
```plaintext
TODO-List/
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
│   ├── error.svg
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Loading.jsx
│   │   ├── Logo.jsx
│   │   ├── Task.jsx
│   │   ├── TaskList.jsx
│   │   ├── TodoInfo.jsx
│   │   ├── TodoList.jsx
│   │   ├── constants.js
│   │   └── icons/
│   │       ├── AddIcon.jsx
│   │       ├── CheckIcon.jsx
│   │       └── DeleteIcon.jsx
│   ├── index.css
│   ├── main.jsx
│   └── utils/
│       ├── localization.js
│       └── validation.js
├── tailwind.config.js
└── vite.config.js
```

## 🧩 Components

### Core Components
- **Task**: Represents an individual task with options to edit, delete, or mark it as completed.
- **TaskList**: Displays a list of tasks, applying filters as needed.
- **TodoList**: The main container for managing tasks and their states.
- **TodoInfo**: Provides summary information about the tasks.

### UI Components
- **Button**: A reusable button component with customizable styles and actions.
- **Input**: Handles user input for creating or editing tasks.
- **Loading**: Displays a loading indicator during filter change.
- **Logo**: Displays the application logo.

### Icons
- **AddIcon**: Icon for adding new tasks.
- **CheckIcon**: Icon for marking tasks as completed.
- **DeleteIcon**: Icon for removing tasks.

### Utilities
- **localization.js**: Handles localization and date formatting.
- **validation.js**: Contains functions for validating task inputs.

---
