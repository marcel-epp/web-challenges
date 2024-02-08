import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍏 Apple", color: "green" },
    { id: 1, name: "🍐 Pear", color: "yellow" },
    { id: 2, name: "🍇 Grape", color: "purple" },
    { id: 3, name: "🍉 Melon", color: "red" },
    { id: 4, name: "🥕 Carrot", color: "orange" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
