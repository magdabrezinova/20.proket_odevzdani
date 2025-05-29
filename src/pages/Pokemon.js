import Card from "../components/PokemonCard"
import { useState } from "react"

const Pokemon = () => {
  const [inputValue, setInputValue] = useState("")
  const [pokemonName, setPokemonName] = useState("bulbasaur")

  const formSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim() !== "") {
      setPokemonName(inputValue.trim())
    }
  }

  return (
    <div>
      <form className="poke-form" onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Jméno"
          Title="Zadejte celé jméno Pokémona, např. bulbasaur, ivysaur, caterpie, weedle"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Zobrazit</button>
      </form>
      <Card pokemonName={pokemonName} />
    </div>
  )
}

export default Pokemon