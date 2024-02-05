import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  //let code = "?";
  const [code, setCode] = useState("?");

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(code + emoji);
    //code + event.target.textContent;
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick(event.target.textContent);
            console.log("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick(event.target.textContent);
            console.log("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick(event.target.textContent);
            console.log("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
          console.log("Reset Code...");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
