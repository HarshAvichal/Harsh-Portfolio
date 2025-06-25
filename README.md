# Harsh Avichal Portfolio

A modern, full-stack portfolio website built with React.js (frontend) and Node.js/Nodemailer (backend). Showcases education, experience, projects, and skills, with a live contact form and beautiful UI.

---

## 🚀 Live Demo
- **Frontend (Vercel):** [your-vercel-url](https://your-vercel-url)
- **Backend (Render):** [your-render-url](https://your-render-url)

---

## ✨ Features
- **Responsive React.js Frontend** with SPA routing (Vercel-ready)
- **Animated Hero, Skills, and Timeline sections**
- **Project cards** with live and code links
- **Education and Experience timeline**
- **Contact form** with real email sending (Nodemailer backend)
- **Modern toast notifications** for form feedback
- **Custom favicon and resume download**
- **Deployed with Vercel (frontend) and Render (backend)**

---

## 🗂️ Folder Structure
```
/Portfolio-Youtube-master
  /public
    favicon.png
    index.html
    Harsh Avichal Resume.pdf
    HeroImage.jpg
  /src
    /components
    /images
    /data
    /themes
    /utils
  server.js
  .env (not committed)
  .gitignore
  package.json
  vercel.json
  README.md
```

---

## 🛠️ Technologies Used
- React.js, Styled-Components, React Router
- Node.js, Express, Nodemailer
- Toastify for notifications
- Vercel (frontend hosting)
- Render (backend hosting)

---

## 🏗️ Local Development
1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the frontend:**
   ```bash
   npm start
   ```
4. **Start the backend:**
   ```bash
   node server.js
   # or
   npx nodemon server.js
   ```
5. **Open:** [http://localhost:3000](http://localhost:3000)

---

## 🔒 Environment Variables
Create a `.env` file for the backend:
```
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASS=your_gmail_app_password
```

---

## 🌐 Deployment
- **Frontend:** Push to GitHub and connect to Vercel. The included `vercel.json` ensures SPA routing works for all routes.
- **Backend:** Push to GitHub and connect to Render. Set your environment variables in the Render dashboard.
- **Update your frontend fetch URL** to use your Render backend URL (e.g., `https://your-backend.onrender.com/send`).

---

## 📬 Contact Form
- Sends real emails using Nodemailer and Gmail App Passwords.
- Shows modern toast notifications for success, error, and validation.
- Auto-reply to sender with a custom HTML template.

---

## 📄 License
MIT

---

## Credits
- UI/UX inspired by modern developer portfolios.
- Built and maintained by Harsh Avichal.
