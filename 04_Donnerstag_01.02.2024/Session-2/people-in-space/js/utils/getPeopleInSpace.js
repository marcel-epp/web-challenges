const url = "http://api.open-notify.org/astros.json";

export default async function GetPeopleInSpace() {
  const response = await fetch(url);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}
