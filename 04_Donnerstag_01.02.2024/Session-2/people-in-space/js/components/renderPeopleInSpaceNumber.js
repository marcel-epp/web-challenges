// import the fetch function GetPeopleInSpace
import GetPeopleInSpace from "../utils/getPeopleInSpace.js";

// get the html element for the container
const cardContainer = document.querySelector("[data-js='cardContainer']");

export default async function RenderPeopleInSpaceNumber() {
  // get the data object and put it in a variable
  const numberOfPeopleInSpace = await GetPeopleInSpace();
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <i class="fa-solid fa-user-astronaut fa-2xl"></i>
    <h2 class="card--title">How many people are in space?</h2>
    <span class="card--number" data-js="people-in-space">${numberOfPeopleInSpace.number}</span>`;
  cardContainer.append(card);
}
