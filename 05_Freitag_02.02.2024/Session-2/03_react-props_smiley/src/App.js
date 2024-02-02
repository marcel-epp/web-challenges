import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  return isHappy ? "ich bin true 😄" : "Ich bin false 😔";
}

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <br />
      <br />
      <Smiley isHappy={false} />
    </div>
  );
}
