import { useState, useCallback } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
// import components;
import ActivityForm from "./components/activityform/activityform";
import ActivityList from "./components/activitylist/activitylist";
import WeatherComponent from "./components/fetchweather/fetchweather";

//-----------------------------------------------------------------------------

function App() {
  // State to store the weather data
  const [activitys, setActivitys] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  // handle new activitys
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

  //-----------------------------------------------------------------------------

  // State to store the weather data
  const [weatherData, setWeatherData] = useState(null);

  // Function to update weather data
  // function updateWeatherData(data) {
  //   setWeatherData(data);
  // }
  const updateWeatherData = useCallback((data) => {
    setWeatherData(data);
  }, []);

  //-----------------------------------------------------------------------------

  // Function to handle the delete activity
  function handleDeleteActivity(id) {
    setActivitys((prevActivities) =>
      // using prev state to filter out
      prevActivities.filter((activity) => activity.id !== id)
    );
  }

  //-----------------------------------------------------------------------------
  return (
    <div className="App">
      <header className="header">
        <WeatherComponent
          weatherData={weatherData}
          setWeatherData={updateWeatherData}
        />
      </header>
      <main className="main">
        <ActivityList
          activitys={activitys}
          weatherData={weatherData}
          onDeleteActivity={handleDeleteActivity}
        />
        <ActivityForm onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}
//-----------------------------------------------------------------------------
export default App;
