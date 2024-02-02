import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return (
    <div>
      {valueA} + {valueB} = {result}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Sum valueA={1} valueB={2} />
      <Sum valueA={3} valueB={4} />
    </div>
  );
}
