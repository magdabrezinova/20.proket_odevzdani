import { useState, useEffect } from "react"
import image11 from "../img/Image11.JPG"
import image12 from "../img/Image12.JPG"
import image13 from "../img/Image13.JPG"
import '../index.css'

const Home = () => {
  const [typeOfPhoto, setTypeOfPhoto] = useState("flowers")
  const [photos, setPhotos] = useState([])
  const [categories, setCategories] = useState([])
  const [quote, setQuote] = useState("výchozí text")

  
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("data.json") 
      const json = await response.json()
      setPhotos(json.photos)
      setCategories(json.categories)
    }

    loadData()
    getQuote()
  }, [])

  const url = "https://api.kanye.rest/"
  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setQuote(data["quote"])
  }

  return (
    <div className="home">
      <div className="quote">{quote}</div><br />
      <div className="small-photos">
        <img src={image11} alt="" className="image-small" />
        <img src={image12} alt="" className="image-small" />
        <img src={image13} alt="" className="image-small" />
      </div>
      <div className="all-buttons">
        {categories.map((oneCategory, index) => (
          <button
            key={index}
            className={`one-button ${oneCategory === typeOfPhoto ? "active-button" : ""}`}
            onClick={() => setTypeOfPhoto(oneCategory)}
          >
            {oneCategory}
          </button>
        ))}
      </div>
      <div className="all-photos">
        {photos
          .filter(photo => photo.category === typeOfPhoto)
          .map(({ id, image, description }) => (
            <div key={id} className="one-photo">
              <img src={image} alt="" />
              <p>{description}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home