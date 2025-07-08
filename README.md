# My Office – Full Stack App for Lawyers

A clean and organized **full-stack web app** built for lawyers to manage their **cases** and **clients** in one centralized place. Secure login, client management, and case tracking — this is your virtual law office.

🔗 **Live Link:** [https://myoffice316.netlify.app](https://myoffice316.netlify.app)

[![My Office Screenshot](https://res.cloudinary.com/deq0w5tnr/image/upload/v1751296160/2025-06-30-180817-my-office-screenclip_p7gwfc.png)](https://myoffice316.netlify.app/)

---

## 🚀 Tech Stack

**Front-end:**
- React
- Vite
- TailwindCSS
- React Router DOM
- React Toastify

**Back-end:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Passport.js (Local Strategy)
- express-session & connect-mongo

---

## 📁 Features

✅ **User Authentication** (Register, Login, Logout)  
✅ **Client Management** (Add, View by logged-in user)  
✅ **Case Tracking** (Integrated within each client)  
✅ **Session-based Login** (with Passport.js)  
✅ **Responsive UI**  
✅ **MongoDB Integration** with user isolation (each user sees only their clients/cases)

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/YourUsername/my-office
cd my-office
```

### 2. Set up the server

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret
```

Start the server:

```bash
node server.js
```

### 3. Set up the client

```bash
cd ../frontend
npm install
npm run dev
```

Open your browser at:

```
http://localhost:3000
```

---

## 🔒 Authentication & Session Handling

- User sessions are stored in MongoDB via `connect-mongo`.
- All protected routes use a `isAuthenticated` middleware.
- Sessions are sent via cookies, and the frontend uses `credentials: include` in all fetch requests.

---

## 📊 Dashboard

Your home screen shows:
- 🔢 Total number of **clients**
- 📂 Number of **active cases**
- 🔍 Links to manage cases or add new clients

---

## 🛠️ Future Improvements

- Add case filtering and advanced search
- Add ability to upload legal documents
- Add role-based access (admin/lawyer)
- Migrate to JWT-based authentication (optional)

---

## 🧠 Lessons Learned

- Full-stack authentication using **Passport.js**
- Session management and security using **cookies**
- Working with MongoDB & Mongoose models
- Building a REST API and protecting routes
- Sharing authentication state between client and server (CORS, cookies)

---

## 🎓 Similar Projects

- [Beautello Salon (React UI)](https://github.com/Mooddex/Beautello-Salon)  
- [Timeline Page](https://github.com/Mooddex/timeline-page)
```

