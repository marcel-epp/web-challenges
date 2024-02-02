import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is my component!</h1>
      <p>I am a text...</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
