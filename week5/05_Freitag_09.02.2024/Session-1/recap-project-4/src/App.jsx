//import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
//import components;
import ActivityForm from "./components/activityform/activityform";
function App() {
  const [activitys, setActivitys] = useLocalStorageState("activity", {
    defaultValue: [],
  });
  function handleAddActivity(newEntry) {
    // log the new entries
    console.log(newEntry);
    setActivitys([
      {
        id: uid(),
        name: newEntry.name,
        isForGoodWeather: newEntry.isForGoodWeather,
      },
      ...activitys,
    ]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Weather App!</h1>
        <p>This is the weather app for recap project 4.</p>
      </header>
      <main className="main">
        <ActivityForm onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;