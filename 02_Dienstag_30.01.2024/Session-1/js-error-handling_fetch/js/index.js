console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {
  try {
    const response = await fetch(url);
    // can't reach url
    if (!response.ok) {
      throw new Error("Cannot fetch the url");
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    return (errorElement.innerHTML = `<p class"error">${error}</p>`);
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    errorElement.innerHTML = "";
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
    console.clear();
  })
);
