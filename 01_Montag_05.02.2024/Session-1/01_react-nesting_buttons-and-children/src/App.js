import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button type="button">This is button 1</Button>
      <Button type="button">This is button 2</Button>
      <Button type="button">This is button 3</Button>
      <Button type="button">This is button 4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
