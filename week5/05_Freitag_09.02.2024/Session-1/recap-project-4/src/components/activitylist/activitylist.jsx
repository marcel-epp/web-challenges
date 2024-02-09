function ActivityList({ activitys }) {
  return (
    <div className="activity--list">
      <ol>
        {activitys.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default ActivityList;
