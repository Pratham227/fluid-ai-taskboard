# Fluid AI – Task Board

A lightweight full-stack Task Board application built as part of a time-boxed engineering assignment for the **Python GenAI Developer** role at Fluid AI.

The goal of this project was to demonstrate clean Python backend design, simple and well-structured APIs, frontend–backend integration, and thoughtful UI/UX decisions — all within a limited time constraint.

---
Project Structure
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models.py      # Pydantic models (Task, TaskCreate, TaskUpdate)
│   │   ├── routes.py      # API endpoints
│   │   └── storage.py     # In-memory task storage
│   └── main.py            # FastAPI app entry point
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Component styles
│   │   ├── index.css      # Tailwind imports
│   │   └── main.jsx       # React entry point
│   ├── vite.config.js     # Vite config with proxy
│   └── package.json
└── replit.md

API Endpoints
POST /tasks - Create a new task
GET /tasks - List all tasks
PATCH /tasks/{id} - Toggle task completion
DELETE /tasks/{id} - Delete a task
GET /health - Health check
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

