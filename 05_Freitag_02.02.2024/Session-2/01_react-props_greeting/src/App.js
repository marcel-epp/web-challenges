import "./styles.css";

const coaches = ["Niklas", "Roland", "Marc", "Diego"];

function Greeting({ name }) {
  return <h2>Hello {coaches.includes(name) ? "Coach!" : name + "!"}</h2>;
}

export default function App() {
  return (
    <div>
      <Greeting name="Marcel" />
      <Greeting name="Roland" />
    </div>
  );
}
