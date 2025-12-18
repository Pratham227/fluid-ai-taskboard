# Fluid AI – Task Board

A lightweight full-stack Task Board application built as part of a time-boxed engineering assignment for the **Python GenAI Developer** role at Fluid AI.

The goal of this project was to demonstrate clean Python backend design, simple and well-structured APIs, frontend–backend integration, and thoughtful UI/UX decisions — all within a limited time constraint.

---

## 🚀 Features

- Add, list, complete, and delete tasks
- Clean REST API built using FastAPI
- Simple in-memory storage (runtime only)
- Progress indicator showing task completion
- **Focus Mode** to hide completed tasks and reduce visual clutter
- Clean, minimal, and responsive UI

---

## 🧠 Unique Feature – Focus Mode

Focus Mode allows users to temporarily hide completed tasks and view only pending ones.  
This small UX enhancement helps reduce cognitive load and encourages task completion without adding unnecessary complexity.

---

## 🛠️ Tech Stack

**Backend**
- Python
- FastAPI
- Pydantic

**Frontend**
- HTML
- Tailwind CSS
- Vanilla JavaScript

**Storage**
- In-memory Python list (no external database)

---

## 🏗️ Project Structure
fluid-ai-task-board/
│
├── backend/
│ ├── main.py # FastAPI app and routes
│ ├── models.py # Task data model
│ └── storage.py # In-memory task storage
│
├── frontend/
│ └── index.html # Frontend UI
│
├── requirements.txt
└── README.md

## API Endpoints
POST /tasks - Create a new task
GET /tasks - List all tasks
PATCH /tasks/{id} - Toggle task completion
DELETE /tasks/{id} - Delete a task
GET /health - Health check


