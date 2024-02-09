function ActivityList({ activitys, isGoodWeather }) {
  return (
    <div className="activity--list">
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>

      <ol>
        {activitys.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default ActivityList;
