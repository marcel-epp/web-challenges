import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana", color: "yellow" },
    { id: 1, name: "🍏 apple", color: "green" },
    { id: 2, name: "🍒 cherry", color: "red" },
    { id: 3, name: "🥭 mango", color: "green" },
    { id: 4, name: "🍇 grape", color: "purple" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
