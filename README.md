# Fluid AI – Task Board 🧠

A clean, minimal full-stack Task Board built as part of a **time-boxed engineering assignment**, focusing on **clarity, usability, and strong engineering judgment** rather than unnecessary complexity.

This project demonstrates how to quickly design, build, and ship a complete product with a well-structured Python backend and a polished frontend experience.

---

## 🔗 Live Demo
- **Preview:** <https://d06aa0a9-223f-4757-b2f4-e7e8d4b59f7a-00-3rydbv2k8q8co.sisko.replit.dev/>
- **Walkthrough (2 min Loom):** <Loom Video URL>

---

## 🎯 Objective

The goal of this project was to create a small but complete application that showcases:
- Clean and Pythonic backend code
- Thoughtful REST API design
- Smooth frontend–backend integration
- Visual polish and usability
- Ability to deliver within a tight 60-minute timebox

---

## ✨ Features

- Create new tasks
- View all tasks in real time
- Mark tasks as completed
- Delete tasks
- Dynamic progress indicator showing completion percentage
- **Focus Mode (Unique Feature)**  
  A toggle that hides completed tasks to reduce visual clutter and help users focus on what’s pending

---

## 🧠 Product Thinking

Rather than adding complexity, the app focuses on **small UX improvements** that meaningfully improve the user experience:
- Clear visual distinction for completed tasks
- Immediate feedback through progress updates
- Focus Mode to reduce cognitive load

These decisions were made intentionally to reflect real-world product judgment.

---

## 🛠️ Tech Stack

### Backend
- **Python**
- **FastAPI**
- RESTful API architecture
- In-memory runtime storage (no external database)

### Frontend
- **HTML**
- **Tailwind CSS**
- Vanilla JavaScript for API communication

---

## 📐 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/tasks` | Add a new task |
| GET | `/tasks` | Fetch all tasks |
| PATCH | `/tasks/{id}` | Toggle task completion |
| DELETE | `/tasks/{id}` | Delete a task |

---

## 🧩 Architecture Overview

- Backend handles all business logic and task state
- Frontend consumes APIs and updates UI dynamically
- Single preview URL for easy demo and evaluation
- No authentication or database to keep scope focused and readable

---

## ▶️ Run Locally

```bash

uvicorn backend.main:app --reload



