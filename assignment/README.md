# EmployWise Front End Assignment

The **EmployWise Front End Assignment** is a React-based application demonstrating user management functionalities, integrated with the Reqres API. This project showcases essential features such as user authentication, paginated user lists, and user management, alongside additional bonus features for enhanced usability.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation & Running the Application](#installation)
4. [API Endpoints](#api-endpoints)
5. [Usage](#usage)
6. [Error Handling](#error-handling)
7. [Bonus Features](#bonus-features)

---

## Features

- **User Authentication**: Users can log in using predefined credentials.
- **Paginated User List**: View a paginated list of users with details.
- **Edit User Details**: Edit first name, last name, and email of users.
- **Delete User**: Remove users from the list.
- **Responsive UI**: Designed for accessibility across devices.
- **Error Handling**: Gracefully handles API errors with feedback.
- **Bonus Features**:
  - Client-side search and filtering.
  - Navigation using React Router.
  - Hosted on a free server for easy access.

---

## Technologies Used

- **React**: Framework for building the user interface.
- **Axios**: For making HTTP requests.
- **React Router**: Enables navigation between pages.
- **CSS Framework**: Tailwind CSS for styling.
- **Local Storage**: Used for persisting the authentication token.

---

## Getting Started

### Prerequisites

- Ensure you have **Node.js** and **npm** installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KartikAKGEC89/Global-Groupware-Solutions-Limited-Front-End-Development-Assignment.git
   cd Global-Groupware-Solutions-Limited-Front-End-Development-Assignment
   
### Install dependencies:
   
- npm install
- Running the Application
- npm start
- Start the development server: http://localhost:3000


### API Endpoints

- Login: POST /login - Authenticate user and return a token.
- User List: GET /users - Retrieve a paginated list of users.
- Edit User: PUT /users/:id - Edit user details.
- Delete User: DELETE /users/:id - Delete a user.

### Usage
- Login: Enter your credentials to log in and receive an authentication token.
- View Users: Browse the paginated user list.
- Edit User: Click on a user to update their details.
- Delete User: Remove a user from the list by clicking the delete button.

### Error Handling
- Provides feedback for API errors like failed login or network issues.
- Displays error messages to guide users toward the next steps.

### Bonus Features
- Client-side Search and Filtering: Quickly find users or filter the list.
- Navigation with React Router: Seamless page transitions.
- Hosted Application: Accessible from a public server.
