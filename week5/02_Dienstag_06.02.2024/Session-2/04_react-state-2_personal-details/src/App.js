import React from "react";
// get the usestate
import { useState } from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  // Lift both states up to the `App` component.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Write a `handleCreateUser` function which receives the two parameters
  // `name` and `email` and uses them to set both state variables.
  function handleCreateUser(name, email) {
    setName(name);
    setEmail(email);
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      {/* - Pass `handleCreateUser` to the `Form` component:
          - Hint: `onDelete={handleDelete}`
          - Make sure to receive the prop inside of the `Form` component.
          - Refactor the `handleSubmit` function so that it calls `onCreateUser`
          with the correct values of the form fields as arguments. */}
      <Form onCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        {/* - Go back to the `App` component and display both states in the respective output fields below the `Form` component. */}
        Name: <span className="output">{name}</span>
      </p>
      <p>
        {/* - Go back to the `App` component and display both states in the respective output fields below the `Form` component. */}
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
