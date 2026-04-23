import PokeBall from "./components/PokeBall"
import { usePokemonContext } from "./context/PokeContextProvider"

const App = () => {
  const {selectedPokemon, nextPokemon, prevPokemon, pokemonsData} = usePokemonContext()
  return (
    <main>
    <nav>
      <button onClick={prevPokemon}><i className="fa-solid fa-caret-left"></i></button>
      <h1>{selectedPokemon.name}</h1>
      <button onClick={nextPokemon}><i className="fa-solid fa-caret-right"></i></button>
    </nav>
      <img src={selectedPokemon.image} alt={selectedPokemon.name} className="pokePic" />
      
      {/* TODO: ide jön a Health komponens */}

      <div className="pokeType">
        {selectedPokemon.types.map(type => (
          <span key={type.name} style={{ backgroundColor: type.color }}>
            {type.name}
          </span>
        ))}
    </div>
    <div className="pokeBallWrapper">
     
      {pokemonsData.map((pokemon, idx) => <PokeBall pokemon={pokemon} key={idx} />)}
    </div>
    </main>
  )
}

export default App