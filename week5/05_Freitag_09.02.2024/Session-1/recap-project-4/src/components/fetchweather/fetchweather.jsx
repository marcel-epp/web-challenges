import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const WeatherComponent = ({ weatherData, setWeatherData }) => {
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
  }, []);

  //}, [setWeatherData]);
  return (
    <div>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Condition: {weatherData.condition}</p>
          <p>Is good weather: {weatherData.isGoodWeather ? "true" : "false"}</p>
          <p>Location: {weatherData.location}</p>
          <h2>
            {weatherData.isGoodWeather
              ? "The weather is awesome! Go outside and:"
              : "Bad weather outside! Here's what you can do now!"}
          </h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// PropTypes validation
WeatherComponent.propTypes = {
  weatherData: PropTypes.object, // Assuming weatherData is an object
  setWeatherData: PropTypes.func.isRequired, // Assuming setWeatherData is a function
};

export default WeatherComponent;
