const URL = "https://rickandmortyapi.com/api/character?page=1";

const Api = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
export default Api;
