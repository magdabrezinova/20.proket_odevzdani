import Card from "../components/PokemonCard"
import { useState } from "react"

const Pokemon = () => {
  const [inputValue, setInputValue] = useState("")
  const [pokemonName, setPokemonName] = useState("")
  const [error, setError] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false) // nový stav

  const formSubmit = async (event) => {
    event.preventDefault()
    const name = inputValue.trim().toLowerCase()
  
    const isValidInput = /^[a-z0-9-]+$/.test(name)
  
    setHasSubmitted(true)
  
    if (!isValidInput) {
      setError("Neplatné znaky ve jménu pokémona. Lze zadávat jen písmena, čísla a pomlčky")
      setIsValid(false)
      return
    }
  
    if (name !== "") {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!response.ok) {
          throw new Error("not found")
        }
  
        setPokemonName(name)
        setError("")
        setIsValid(true)
      } catch (err) {
        setError("Zadali jste jméno pokémona, který neexistuje")
        setIsValid(false)
      }
    }
  }

  return (
    <div>
      <form className="poke-form" onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Jméno pokémona"
          title="Zadejte celé jméno Pokémona, např. bulbasaur, ivysaur, caterpie, weedle"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Zobrazit</button>
      </form>

      {hasSubmitted && error && <p className="error">{error}</p>}

      {hasSubmitted && isValid && <Card pokemonName={pokemonName} />}
    </div>
  )
}

export default Pokemon