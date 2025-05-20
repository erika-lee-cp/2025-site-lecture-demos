import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(pokemonResponse => {
        // log pokemonResponse to see API response format
        console.log(pokemonResponse.results);
        setPokemon(pokemonResponse.results);
      })
      .catch(error => {
        console.error('There was a problem:', error);
      });
  }, []);

  const cards = pokemon.map((p) => {
    const i =  p.url.split("/").at(-2);
    return (
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`}/>
        <div>{p.name}</div>
      </div>
    );
  });

  return (
    <div class="pokemon-cards">
      {cards}
    </div>
  )
}

export default App;
