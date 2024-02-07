import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [siteId, setSiteId] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${siteId}`
        );
        const data = await response.json();
        //console.log(data);
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [siteId]);

  if (!pokemon) {
    return null;
  }

  return (
    <main>
      <button
        onClick={() => {
          setSiteId((siteId) => siteId - 1);
          console.log(siteId);
        }}
        type="button"
        disabled={siteId === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setSiteId((siteId) => siteId + 1);
          console.log(siteId);
        }}
        type="button"
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
