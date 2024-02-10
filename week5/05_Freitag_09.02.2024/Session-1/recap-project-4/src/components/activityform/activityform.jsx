function ActivityForm({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    // get the form elements
    const formElements = event.target.elements;
    // create an object with the keys
    const newData = {
      name: formElements.formName.value,
      isForGoodWeather: formElements.formCheckWeather.checked,
    };
    // call the function
    onAddActivity(newData);
    event.target.reset();
    event.target.elements.formName.focus();
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add new Activity:</h2>
      <div className="form-group">
        <label htmlFor="formName">Name:</label>
        <input name="formName" id="formName" required />
      </div>
      <div className="form-group">
        <label htmlFor="formCheckWeather">Good-weather activity:</label>
        <input type="checkbox" name="formCheckWeather" id="formCheckWeather" />
      </div>
      <button className="form-submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ActivityForm;
