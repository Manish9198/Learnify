How to Run Learnify Locally
Project Structure
```
Learnify/
├── frontend/
├── server/
├── .gitignore
├── README.md
```
Prerequisites

Make sure you have installed:

Node.js (v18+ recommended)

MongoDB (local or MongoDB Atlas)

Step 1: Clone the Repository
```
git clone https://github.com/Manish9198/Learnify.git
cd Learnify
```

Step 2: Backend Setup (Server)
```
Go to server folder
cd server
```
```
Install dependencies
npm install
```
Step 3: Create .env File
Create a file named .env inside the server/ folder.

Example: server/.env
```
PORT=5000
DB = mongodb://127.0.0.1:27017/learnify
Jwt_Sec=your_jwt_secret_key

Gmail=your_email@gmail.com
Password=your_email_app_password

Activation_Secret = your_activation_secret 

Razorpay_Key=your_razorpay_key   // create key && secret from razorpay website
Razorpay_Secret=your_razorpay_secret 

FRONTEND_URL=http://localhost:5173
```
Notes:

Use MongoDB Atlas URI if not using local MongoDB
ensure keys are from Razorpay Dashboard → API Keys

Step 4: Uploads Folder Setup

Uploads are ignored by Git, so you must create them manually.
```
Create uploads directory:
mkdir Uploads
```
```
Final path should be:
server/Uploads/
```

Used for:

Course videos

Thumbnails

User-uploaded media (via Multer)

Step 5: Start Backend Server
```
npm run dev
```

Backend runs on:
http://localhost:5000

Step 6: Frontend Setup
Go to frontend folder
```
cd ../frontend
```
Install dependencies
```
npm install
```

Frontend Assets Path
Static assets such as images are stored in:
```
cd src
mkdir assets
```

Example usage in React:
```
import avatar from "../assets/avatar.png";
<img src={avatar} alt="profile" />
```
Step 7: Start Frontend
```
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```
Step 8: Run Both Together (Optional)

Open two terminals:

Terminal 1
```
cd server
npm start
```

Terminal 2
```
cd frontend
npm run dev
```

Application Features

User authentication (JWT)

Course browsing & purchase

Lecture video streaming

Progress tracking

Admin dashboard

Secure file uploads

Email verification & password reset

Common Issues & Fixes
MongoDB not connecting?

Check MONGO_URI
Ensure MongoDB service is running

Uploads not working?
Ensure server/Uploads folder exists
Check Multer middleware path
Ensure the .env file has the correct keys as it is without space after assignment(=)
Frontend not calling backend?

Check API base URL in frontend
Ensure backend is running on port 5000

Git Ignore Confirmation

These files/folders are intentionally ignored:

node_modules/
.env
server/Uploads/
dist/
build/

Author: Manish Sutar
