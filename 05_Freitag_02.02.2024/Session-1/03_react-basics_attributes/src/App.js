import React from "react";
import "./styles.css";

function ArticleComponent() {
  return (
    <article>
      <h2 className="article__title">My Article Title</h2>
      <label htmlFor="nameInput">Your Turtle Name:</label>
      <input id="nameInput" type="text"></input>
      <div>
        <a
          className="article__link"
          href="https://de.wikipedia.org/wiki/Teenage_Mutant_Ninja_Turtles"
          rel="noreferrer"
          target="_blank"
        >
          TMNT on Wikipedia
        </a>
      </div>
    </article>
  );
}

export default function App() {
  return ArticleComponent();
}
