import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const getGifs = async () => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        setPokemonData(data);
      }catch(e){
        console.error(`Error calling ${url}: ${e}`);
      }
    }
    getGifs();
  }, []);

  return (
    <>
      <h1>PokePoke</h1>

      {pokemonData ? <div>Found Pokemon</div> :<></> }

    </>
  )
}

export default App
