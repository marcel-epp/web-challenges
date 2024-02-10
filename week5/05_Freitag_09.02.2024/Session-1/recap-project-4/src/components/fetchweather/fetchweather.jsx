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
    <>
      {weatherData ? (
        <>
          <div className="header-condition">{weatherData.condition}</div>
          <div className="header-temperature">
            {weatherData.temperature} &#8451;
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

// PropTypes validation
WeatherComponent.propTypes = {
  weatherData: PropTypes.object, // Assuming weatherData is an object
  setWeatherData: PropTypes.func.isRequired, // Assuming setWeatherData is a function
};

export default WeatherComponent;
