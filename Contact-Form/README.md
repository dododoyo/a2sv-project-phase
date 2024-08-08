# Contact Form Application

## Description

This Contact Form Application is a simple React-based web application that allows users to submit their contact information, including their name, email, and a message. The application uses the `react-hook-form` library to manage form state and validation, ensuring a smooth and efficient user experience. The form data is validated on the client side before submission, providing immediate feedback to users if any required fields are missing or if the email format is incorrect.

## Features

- **Form State Management**: Utilizes `react-hook-form` for efficient form state management.
- **Client-Side Validation**: Provides real-time validation feedback for required fields and email format.
- **Responsive Design**: Styled with Tailwind CSS for a responsive and visually appealing layout.
- **Developer Tools**: Includes `@hookform/devtools` for debugging form state during development.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **react-hook-form**: A library for managing form state and validation in React.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **@hookform/devtools**: A set of tools for debugging `react-hook-form`.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/dododoyo/a2sv-project-phase.git
   ```
2. Navigate to the parent directory:
   ```sh
   cd a2sv-project-phase
   ```
3. Navigate to the project directory:
   ```sh
   cd Contact-Form
   ```
4. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Usage

- Fill in the contact form with your name, email, and message.
- Click the "Submit" button to submit the form.
- If any required fields are missing or the email format is incorrect, validation messages will be displayed.

## Demo

### `ADDING DATA`

### Blank Page

![Blank Page](https://dododoyo.github.io/images/ContactForm/Start.png)

### Blank Page with DevTools

![Blank Page](https://dododoyo.github.io/images/ContactForm/DevBlank.png)

### Add Name

![Add Name](https://dododoyo.github.io/images/ContactForm/DevName.png)

### Add Email

![Add Email](https://dododoyo.github.io/images/ContactForm/DevEmail.png)

### Add Full Data

![Add Full Data](https://dododoyo.github.io/images/ContactForm/DevFull.png)

### `TESTING FEATURES`

### Name Error

![Name Error Image](https://dododoyo.github.io/images/ContactForm/nameError.png)

### Email Error

![Message Error Image](https://dododoyo.github.io/images/ContactForm/emailError.png)

### Message Error

![Message Error Image](https://dododoyo.github.io/images/ContactForm/messageError.png)

### `SUBMISSION`

![Submission Image](https://dododoyo.github.io/images/ContactForm/FormSubmission.png)

## Acknowledgements

- [React](https://reactjs.org/)
- [react-hook-form](https://react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@hookform/devtools](https://github.com/react-hook-form/devtools)

---

Feel free to customize this README file to better suit your project's needs.
