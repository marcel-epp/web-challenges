// import the fetch function GetPeopleInSpace
import GetPeopleInSpace from "../utils/getPeopleInSpace.js";

// get the html element for the container
const cardContainer = document.querySelector("[data-js='cardContainer']");

export default async function RenderPeopleInSpaceNames() {
  // get the data object and put it in a variable
  const namesOfPeopleInSpace = await GetPeopleInSpace();
  const card = document.createElement("div");
  card.classList.add("card");
  cardContainer.append(card);
  const cardIcon = document.createElement("i");
  cardIcon.classList.add("fa-solid");
  cardIcon.classList.add("fa-signature");
  cardIcon.classList.add("fa-2xl");
  card.append(cardIcon);
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card--title");
  cardTitle.textContent = "Who is in space?";
  card.append(cardTitle);
  const namesOfPeopleInSpaceName = namesOfPeopleInSpace.people;
  namesOfPeopleInSpaceName.forEach((people) => {
    console.log(people.name);
    const names = document.createElement("span");
    names.classList.add("card--name");
    names.textContent = people.name;
    card.append(names);
  });
}
