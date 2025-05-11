
# Student Dashboard

This is a **Student Dashboard** web application designed for students to manage their academic information like courses, assignments, and grades. It uses **Firebase Authentication** for login.

## Features

* **Authentication**: Secure login with Firebase Authentication (email-password and Google login).
* **Student Directory**: View a list of all students enrolled in the institution.
* **Student Dashboard**: Manage enrolled courses, assignments, grades, and personal information.
* **Notifications**: Receive notifications about important deadlines, events, and updates.
* **Profile Management**: Edit personal details and settings.

## Pages

### 1. **Student Directory Page**

The **Student Directory** page displays a list of all students. Each student’s information is listed along with their course details. Users can search, filter, and view details about other students in the directory.

* **Features**:

  * View list of students.
  * Search and filter students.
  * View student profile details.

**Screenshot of Student Directory Page**:

![student-directory](https://github.com/user-attachments/assets/5061ac98-eeed-4539-b584-81849860c39a)

### 2. **Login Page**

The **Login Page** allows students to securely log in to the dashboard using **Firebase Authentication**. Students can either log in using their **email-password** or through **Google** authentication.

* **Features**:

  * Secure login system using Firebase Authentication.
  * Login with email/password or Google account.
  * Form validation for username and password.

**Screenshot of Login Page**:

![Login Page](https://github.com/user-attachments/assets/262d14ef-79bb-4649-aada-3f278ef537fd)

### 3. **Student Dashboard**

The **Student Dashboard** is the main page after login. It displays important academic information such as the list of enrolled courses, assignments, grades, and personal notifications.

* **Features**:

  * View courses, assignments, and grades.
  * Track assignments and deadlines.
  * Edit profile information.
  * Notifications for important updates.

**Screenshot of Student Dashboard**:

![student-dashboard](https://github.com/user-attachments/assets/d0b6125e-3914-43af-8f76-d551641686be)

## Tech Stack

* **Frontend**: React.js, Tailwind CSS
* **Authentication**: Firebase Authentication (email/password, Google login)
* **Backend**: Firebase Firestore (for storing student data) or Firebase Realtime Database
* **Styling**: Tailwind CSS for responsive UI
* **API**: Firebase SDK for interacting with the database

## Live Demo

You can view the live application here:
[*Student Dashboard - Live Demo*](https://your-live-link.com](https://student-dashboard-beta-ruby.vercel.app/)


## Project Setup

### Prerequisites

Make sure you have the following installed:

* **Node.js**: [Download Node.js](https://nodejs.org/)
* **Firebase Account**: [Sign up for Firebase](https://firebase.google.com/)

### Firebase Setup

1. Create a Firebase project from [Firebase Console](https://console.firebase.google.com/).
2. Enable Firebase Authentication:

   * Go to the **Authentication** section and enable **Email/Password** and **Google** sign-in methods.
3. Add Firebase to your app:

   * Go to the **Project Settings** in the Firebase Console.
   * Under **Your Apps**, select **Web** and copy the Firebase configuration object.

### Installation Steps

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate into the project directory:

   ```bash
   cd <project_name>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Add Firebase configuration:

   * Create a `.env` file in the **frontend** directory.
   * Add your Firebase configuration to the `.env` file:

     ```bash
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

5. Run the app:

   ```bash
   npm run dev
   ```

6. Visit the app in your browser:

   ```bash
   http://localhost:3000
   ```

## File Structure

```
/student-dashboard
|-- /frontend
|   |-- /src
|       |-- /components
|       |-- /pages
|       |-- /firebase
|       |-- App.js
|       |-- index.js
|-- .env

## Firebase Authentication Setup

### Email/Password Authentication

* Firebase provides an easy way to manage email/password authentication.
* Use the Firebase Authentication API to register, login, and manage users with email and password.

### Google Sign-In

* Firebase Authentication allows users to sign in with their Google account.
* Use the Firebase Authentication SDK to handle Google login.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Added new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.











