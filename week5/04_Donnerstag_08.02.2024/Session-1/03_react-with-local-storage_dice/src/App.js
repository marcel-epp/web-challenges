import useLocalStorageState from "use-local-storage-state";
//import { useState } from "react";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("key", { defaultValue: [] });
  return (
    <div className="app">
      <main className="app__main">
        <D6Button rolls={rolls} setRolls={setRolls} />
      </main>
      <aside className="app__aside">
        {/* <History rolls={[]} /> */}
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
