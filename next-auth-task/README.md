# Next-Auth

## Pages

### Signup

![Signup Page](https://dododoyo.github.io/image/next-auth/Signup.png)

### Login

![Login Page](https://dododoyo.github.io/image/next-auth/Login.png)

### Signout

![SignOut Page](https://dododoyo.github.io/image/next-auth/signoutPage.png)

### Homepage

![Protected Page](https://dododoyo.github.io/image/next-auth/protectedPage.png)

### Input validations

![Email Error](https://dododoyo.github.io/image/next-auth/emailError.png)

![Password Error](https://dododoyo.github.io/image/next-auth/passwordError.png)

![SignUp Error](https://dododoyo.github.io/image/next-auth/signUpError.png)

## Features

This application provides a robust user authentication system, allowing users to securely sign up and sign in. 


* **Seamless Signup:** New users can easily create an account by providing their name, email, and password or OAuth provider. The system enforces strong password policies with user input validation and utilizes email verification to ensure account security.

* **Secure Sign In:** Registered users can securely access their accounts by providing their email and password. The application communicates with the backend API to authenticate user credentials and provide access tokens upon successful login.


* **API Integration:**  This application seamlessly integrates with a backend API for user authentication. It utilizes designated API endpoints for handling signup and signin requests, ensuring data security and integrity.

**Backend Integration:**

The application leverages the following API endpoints for user authentication:

* **Base URL:** SECRET 🤗
* **Signup:** `/signup` (POST)
* **Email Verification:** `/verify-email` (POST)
* **Sign In:** `/login` (POST) 

**Key Highlights:**

* **User-Friendly Interface:** The signup and sign-in pages are designed with a focus on usability and accessibility, providing a smooth and intuitive experience for all users.
* **Robust Security:** The application prioritizes security by implementing industry best practices for password management, data transmission, and authentication protocols. 
* **Error Handling:** The system includes comprehensive error handling mechanisms to provide informative feedback to users during the signup and sign-in processes.
