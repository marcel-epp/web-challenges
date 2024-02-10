function ActivityList({ activitys, weatherData }) {
  //console.log(weatherData ? weatherData.temperature : "loading...");
  return (
    <div className="activity-list">
      {weatherData ? (
        <>
          <h2>
            {weatherData.isGoodWeather
              ? "The weather is awesome! Go outside and:"
              : "Bad weather outside! Here's what you can do now!"}
          </h2>
          <ol>
            {activitys.map((activity) =>
              // filter the activitys for bad weather
              activity.isForGoodWeather === weatherData.isGoodWeather ? (
                <li key={activity.id}>{activity.name}</li>
              ) : (
                ""
              )
            )}
          </ol>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ActivityList;
