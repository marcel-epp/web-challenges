import React from "react";
import "./styles.css";

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{ color: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }
  return (
    <div>
      <Button
        color="#ff6760"
        disabled=""
        text="Klick mich!"
        onClick={handleClick}
      />
      <br />
      <br />
      <Button
        color="#ff6760"
        disabled="disabled"
        text="Klick mich!"
        onClick={handleClick}
      />
    </div>
  );
}
