
# 📝 To-Do App (AngularJS + Node.js + PostgreSQL)

A simple full-stack to-do task management app. Users can add tasks, view the latest 5 uncompleted tasks, and mark them as done.

---

## 📦 Tech Stack

- Frontend: AngularJS, Bootstrap
- Backend: Node.js + Express
- Database: PostgreSQL
- Testing: Jest, Supertest (backend), Karma + Jasmine (frontend)
- Dockerized: Uses Docker and docker-compose

---

## 🚀 Features

- Add new to-do tasks (title + description)
- Display latest 5 uncompleted tasks
- Mark tasks as done (they disappear from the list)
- RESTful API
- Unit & Integration tests
- Docker support for full stack

---

## 🐳 Running with Docker

Make sure Docker and docker-compose are installed.

1. Clone the repo:

git clone https://github.com/your-username/todoApp.git
cd todoApp


2. Build and run the containers:

docker-compose up --build

backend UI
![alt text](image.png)

front end ui
![alt text](image-2.png)

DB 
![alt text](image-3.png)

3. App should be available at:

- Frontend: http://localhost:8080  
- Backend API: http://localhost:3000/api/tasks  
- PostgreSQL: port 5432

---

## 🧪 Running Tests

🟦 Backend Tests (Node + Express):

From the backend folder:

cd backend
npm install
npm test


🟨 Frontend Tests (AngularJS):

From the frontend folder:

cd frontend
npm install


## 🗄 Database Schema

Table: task


## 📁 Project Structure

todoApp/
│
├── backend/          # Node.js + Express API
│   ├── routes/
│   ├── controllers/
│   ├── db.js
│   ├── app.js
│   ├── server.js
│   ├── tests/
│
├── frontend/         # AngularJS SPA
│   ├── app.js
│   ├── index.html
│   ├── tests/
│
├── docker-compose.yml
├── README.md
```



