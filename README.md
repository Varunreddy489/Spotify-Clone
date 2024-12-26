# Spotify Clone 🎵

A full-featured music streaming app built with modern web technologies! This project replicates the core functionalities of Spotify while introducing additional exciting features for enhanced interactivity.

## Key Features

1. **Music Playback**: Listen to your favorite tracks, skip to the next or previous song seamlessly.
2. **Volume Control**: Adjust the volume using a smooth and responsive slider.
3. **Admin Dashboard**: Create, edit, and manage albums and songs effortlessly.
4. **Real-Time Chat**: Communicate with other users directly within the app.
5. **Online/Offline Status**: See the real-time online status of other users.
6. **Live Activity**: Discover what other users are listening to in real time.
7. **Analytics Page**: Gain insights through aggregated user data.
8. **Google Authentication**: Sign up and log in effortlessly using Google.

## Tech Stack

### Frontend:
- **React.js**: For building the user interface.
- **TypeScript**: Ensuring type safety throughout the application.
- **Tailwind CSS**: For rapid and responsive UI development.
- **ShadCN UI**: For elegant and accessible components.
- **Zustand**: Lightweight state management.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and app data.

### Real-Time Features:
- **Socket.io**: For real-time communication and live updates.

## Installation

### Prerequisites:
- Node.js
- MongoDB

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Varunreddy489/Spotify-Clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Spotify-Clone
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following:
     ```env
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     GOOGLE_CLIENT_ID=<your_google_client_id>
     GOOGLE_CLIENT_SECRET=<your_google_client_secret>
     ```
5. Start the development servers:
   - Backend:
     ```bash
     cd backend && npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend && npm start
     ```
6. Access the application at `http://localhost:3000`.


## Features in Development
- Enhanced playlist management
- Support for multiple themes
- Mobile-friendly design

## Feedback
I’d love to hear your thoughts! Feel free to open issues or submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).

---

Check out the source code on GitHub: [Spotify Clone Repository](https://github.com/Varunreddy489/Spotify-Clone)
