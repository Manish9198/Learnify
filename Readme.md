# Learnify – Full Stack E-Learning Platform

Learnify is a full-stack e-learning platform that enables users to browse courses, purchase securely, and learn through structured video lectures. It includes authentication, role-based access, admin management, payments, progress tracking, and secure file uploads.

```
## Project Structure
Learnify/
├── frontend/
├── server/
├── .gitignore
├── README.md
```
## Prerequisites
Ensure the following are installed on your system:
- Node.js (v18 or higher)
- MongoDB (Local installation or MongoDB Atlas)
- Git

---

## Getting Started

### Step 1: Clone the Repository
git clone https://github.com/Manish9198/Learnify.git
cd Learnify
---

## Backend Setup (Server)

### Step 2: Install Dependencies
cd server
npm install

yaml
Copy code

---

### Step 3: Environment Configuration
Create a `.env` file inside the `server/` directory.

#### Example: `server/.env`
PORT=5000
DB=mongodb://127.0.0.1:27017/learnify
Jwt_Sec=your_jwt_secret_key

Gmail=your_email@gmail.com
Password=your_email_app_password

Activation_Secret=your_activation_secret

Razorpay_Key=your_razorpay_key
Razorpay_Secret=your_razorpay_secret

FRONTEND_URL=http://localhost:5173

yaml
Copy code

**Important Notes**
- Do not add spaces around `=`
- Use MongoDB Atlas URI if not using local MongoDB
- Never commit `.env` files to GitHub

---

### Step 4: Uploads Directory Setup
User-uploaded files are excluded from version control and must be created manually.

cd server
mkdir Uploads

css
Copy code

Final path:
server/Uploads/

yaml
Copy code

Used for:
- Course videos
- Thumbnails
- User-uploaded media via Multer

---

### Step 5: Start Backend Server
npm run dev

arduino
Copy code

Backend will run at:
http://localhost:5000

yaml
Copy code

---

## Frontend Setup

### Step 6: Install Dependencies
cd ../frontend
npm install

yaml
Copy code

---

### Frontend Assets
Static assets such as images are located at:
frontend/src/assets/

yaml
Copy code

Example usage:
import avatar from "../assets/avatar.png";

<img src={avatar} alt="profile" /> ```
Step 7: Start Frontend
arduino
Copy code
npm run dev
Frontend will run at:

arduino
Copy code
http://localhost:5173
Running Both Services
Open two terminals.

Terminal 1

arduino
Copy code
cd server
npm run dev
Terminal 2

arduino
Copy code
cd frontend
npm run dev
Features
User authentication using JWT

Role-based access (User / Admin)

Course browsing and secure purchase

Video lecture streaming

Progress tracking

Admin dashboard for course management

Secure file uploads using Multer

Email verification and password reset

Razorpay payment gateway integration

Common Issues & Solutions
MongoDB Connection Failed
Verify DB value in .env

Ensure MongoDB service is running

Uploads Not Working
Ensure server/Uploads directory exists

Verify Multer configuration

Confirm .env keys have no spaces

Frontend Cannot Reach Backend
Ensure backend is running on port 5000

Verify API base URL configuration

Git Ignore Policy
The following files and folders are intentionally excluded:

bash
Copy code
node_modules/
.env
server/Uploads/
dist/
build/
Author
Manish Sutar

License
This project is licensed for educational and learning purposes.
