function ActivityList({ activitys, weatherData, onDeleteActivity }) {
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
          <ol className="activity-ordered-list">
            {activitys.map(
              (activity) =>
                // filter the activitys for bad weather
                activity.isForGoodWeather === weatherData.isGoodWeather && (
                  <div key={activity.id} className="activity-list-items">
                    <li>{activity.name}</li>
                    <button
                      onClick={() => onDeleteActivity(activity.id)}
                      type="button"
                    >
                      x
                    </button>
                  </div>
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
