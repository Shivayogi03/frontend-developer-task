📝 Task Manager Web App – Frontend Developer Intern Assignment
🚀 Overview

This project is a Task Manager Web Application built to demonstrate frontend skills with React.js, integrated with a Node.js + Express backend.

The app allows users to register, login, and manage tasks via a dashboard with full CRUD operations.

🎯 Goal: Showcase modern web development, secure authentication, responsive design, and scalable code architecture.

🛠️ Technologies Used

Frontend:

⚛️ React.js

🛣️ React Router DOM

📡 Axios

🎨 Tailwind CSS

Backend:

🟢 Node.js & Express.js

🍃 MongoDB & Mongoose

🔒 bcryptjs (password hashing)

🔑 jsonwebtoken (JWT authentication)

Tools:

🖥️ VS Code

⚡ Thunder Client / Postman

🐙 Git & GitHub

✨ Features
🔑 Authentication

🆕 User registration (/register)

🔐 Login with JWT (/login)

🛡️ Protected routes (dashboard accessible only after login)

🚪 Logout functionality

📊 Dashboard (CRUD-enabled)

➕ Create tasks

📋 Read tasks (list all user tasks)

✏️ Update tasks (mark complete / undo)

❌ Delete tasks

🎨 UI/UX

📱 Mobile-first responsive design

🖌️ Clean layout and forms

⚡ Real-time updates on task operations

⚙️ Installation & Setup
Backend
cd backend
npm install
npm run dev


Backend runs on http://localhost:5000

Requires MongoDB (local or Atlas)

Frontend
cd frontend
npm install
npm run dev


Frontend runs on http://localhost:5173

🗂️ API Endpoints
Authentication
Method	Endpoint	Description
POST	/auth/register	🆕 Register new user
POST	/auth/login	🔐 Login & receive JWT
Tasks
Method	Endpoint	Description
GET	/tasks	📋 Fetch all tasks
POST	/tasks	➕ Add new task
PUT	/tasks/:id	✏️ Update task status
DELETE	/tasks/:id	❌ Delete task
🏁 Frontend Flow

🆕 User registers at /register

🔐 User logs in at /login

📊 Redirected to /dashboard

➕ Add, ✏️ Update, ❌ Delete, and 📋 View tasks

🚪 Logout clears JWT and redirects to login

📱 UI/UX & Responsiveness

Fully responsive layout for mobile and desktop

Clean task list with interactive buttons

Protected dashboard routing

Smooth user experience with instant updates

🔒 Security

Passwords hashed using bcryptjs

JWT authentication for secure API calls

Backend routes protected with middleware

Proper API error handling

📈 Scaling Notes
Frontend-Backend Integration

🗂️ Modular folder structure (components, pages, services)

📡 Axios service centralizes API calls

🛡️ Protected routes scalable for role-based access

🌐 Environment variables for API URLs


🗂️ API Testing

All backend APIs were tested using Thunder Client (VS Code extension) with the following:

✅ Authentication: Register & Login

✅ Tasks: Create, Read, Update, Delete

You can export the Thunder Client collection (.json) if required for submission.


Production Considerations -

Backend deployment: Heroku / AWS / DigitalOcean
Frontend deployment: Vercel / Netlify
MongoDB Atlas for production database
Optional caching (Redis) & rate limiting
React bundle optimization with code-splitting & lazy loading


🧑‍💻 Author

Name: Shivayogi AM
Email: perilious8888@gmail.com
GitHub: https://github.com/Shivayogi03/frontend-developer-task

✅ Notes

-Full CRUD implemented on frontend and backend-
-Secure authentication with JWT
-Responsive, clean, and intuitive UI
-Scalable project structure ready for production
