import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
// import components;
import ActivityForm from "./components/ActivityForm/ActivityForm";
import ActivityList from "./components/Activitylist/ActivityList";
import WeatherComponent from "./components/Fetchweather/FetchWeather";

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
        // name: newEntry.name,
        // isForGoodWeather: newEntry.isForGoodWeather,
        ...newEntry,
      },
      ...activitys,
    ]);
  }

  //-----------------------------------------------------------------------------

  // State to store the weather data
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
    // Fetch every 5 seconds
    const fetchInterval = setInterval(fetchData, 5000);
    // Clean up function
    return () => clearInterval(fetchInterval);
  }, [setWeatherData]);

  // Function to update weather data
  function updateWeatherData(data) {
    setWeatherData(data);
  }

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
