const WeatherComponent = ({ weatherData }) => {
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

export default WeatherComponent;
