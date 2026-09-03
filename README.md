# iNotebook

<div align="center">

![iNotebook](https://via.placeholder.com/1200x300?text=iNotebook+Project)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Local-47A248?logo=mongodb)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens)](https://jwt.io/)

A full-stack note-taking app built to learn and showcase real-world CRUD, authentication, and frontend/backend integration.

</div>

## About the Project

iNotebook is a personal note-taking web application where users can sign up, log in, and manage their own notes securely. It is designed as a clean, portfolio-ready project that demonstrates how a React frontend connects to an Express API backed by MongoDB.

This project is a strong example of full-stack learning because it includes:

- user authentication
- protected routes
- persistent database storage
- note CRUD operations
- responsive UI design
- real API integration

## Why This Project

This app shows a complete full-stack workflow:

- React handles the user interface and frontend logic
- Express exposes REST APIs for auth and note management
- MongoDB stores user and note data
- JWT validates authenticated requests
- Local storage keeps the user session on the client

## Key Features

### Authentication

- Sign up with name, email, and password
- Log in securely with JWT tokens
- Protected routes for note operations
- User-specific notes tied to the logged-in account

### Notes

- Create a new note
- Read all saved notes
- Update note details
- Delete notes securely
- Assign tags to notes

### UX

- Notebook-style interface
- Light and dark theme toggle
- Alerts for login, signup, and logout actions
- Simple navigation across pages

## Screenshots

> Add your real screenshots in a `screenshots/` folder to make this section look more polished in a portfolio.

```md
![Login page](./screenshots/login.png)
![Notes dashboard](./screenshots/notes.png)
![Add note form](./screenshots/add-note.png)
```

These placeholders can be replaced with real images once you capture app screenshots.

## Tech Stack

- Frontend: React, React Router, Create React App
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT + bcryptjs
- Validation: express-validator
- Development tools: concurrently, nodemon

## Project Structure

```text
inotebook/
+-- backend/
�   +-- middleware/
�   +-- models/
�   +-- routes/
�   +-- db.js
�   +-- index.js
�   +-- package.json
+-- public/
+-- src/
�   +-- components/
�   +-- context/
�   +-- App.js
�   +-- App.css
�   +-- index.js
�   +-- index.css
+-- package.json
+-- README.md
+-- build/
+-- screenshots/   # optional folder for project screenshots
```

## Prerequisites

Before running the app, make sure you have:

- Node.js installed
- npm installed
- MongoDB running locally on port 27017

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd inotebook
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd backend
npm install
cd ..
```

## Run the App

### Start both frontend and backend together

```bash
npm run both
```

This launches:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Start them separately

Frontend:

```bash
npm start
```

Backend:

```bash
cd backend
npx nodemon index.js
```

## Database Setup

The backend is configured to connect to MongoDB using:

```js
mongodb://localhost:27017/iNotebook
```

Make sure the MongoDB service is running before starting the backend.

## API Endpoints

### Authentication

- `POST /api/auth/createuser` � create a new user
- `POST /api/auth/login` � log in and receive a JWT
- `POST /api/auth/getuser` � get the logged-in user's profile

### Notes

- `GET /api/notes/fetchallnotes` � get a user's notes
- `POST /api/notes/addnote` � create a new note
- `PUT /api/notes/updatenote/:id` � update an existing note
- `DELETE /api/notes/deletenote/:id` � delete a note

## Beginner-Friendly Usage Example

### 1. Sign up

Create an account in the browser using a name, email, and password.

```text
Name: John
Email: john@example.com
Password: 123456
```

### 2. Log in

Use the same email and password to log in. The app stores the token in local storage so your session stays active while the page is open.

### 3. Add a note

```text
Title: Daily plan
Description: Finish the project, review the code, and plan the next task.
Tag: Work
```

### 4. Update or delete a note

After saving, you can edit the note or remove it if it is no longer needed.

## Example API Calls

### Create a user

```bash
curl -X POST http://localhost:5000/api/auth/createuser \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "password": "123456"
  }'
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "123456"
  }'
```

### Add a note

```bash
curl -X POST http://localhost:5000/api/notes/addnote \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Daily plan",
    "description": "Finish the project and review the code.",
    "tag": "Work"
  }'
```

## Common Issues

### MongoDB not connected

If the app fails to connect to MongoDB, verify:

- MongoDB is installed and running
- the database service is active
- the connection string is correct

### Login does not work

Check the following:

- the email is correct
- the password is valid
- backend is running on port 5000
- the token is included for protected API requests

## Future Improvements

- add note search and filters
- add user profile management
- add cloud deployment
- add tests for frontend and backend
- improve UI with richer notebook features

## Contributing

Contributions are welcome.

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

This project is intended for learning and personal development purposes.

## Final Note

This project is a strong portfolio example because it combines frontend design, backend logic, database integration, and secure authentication in a single complete app.
