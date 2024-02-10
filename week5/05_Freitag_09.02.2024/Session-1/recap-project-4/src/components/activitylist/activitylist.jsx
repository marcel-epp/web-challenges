function ActivityList({ activitys, weatherData }) {
  //console.log(weatherData ? weatherData.temperature : "loading...");
  return (
    <div className="activity-list">
      {weatherData ? (
        <div>
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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ActivityList;
