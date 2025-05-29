import { useState, useEffect } from "react"
import image11 from "../img/Image11.JPG"
import image12 from "../img/Image12.JPG"
import image13 from "../img/Image13.JPG"
import categories from "../categories"
import allPhotos from "../Data.js"
import '../index.css'



const Home = () => {

const [typeOfPhoto, setTypeOfPhoto] = useState("flowers")

const filteredPhotos = allPhotos.filter((onePhoto) => {
    return onePhoto.category === typeOfPhoto
})

filteredPhotos.map((onePhoto) => {
    const { id, image, description, category } = onePhoto
  })

const [quote, setQuote] = useState("výchozí text")
  const url = "https://api.kanye.rest/";

  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const finalQuote = data["quote"]
    setQuote(finalQuote)
  }

  useEffect(() => {
    getQuote()
  }, [])


    return <div className="home">
    <div  className="quote">{quote}</div><br/>
    <div  className= "small-photos">
      <img src={image11} alt="" className="image-small"/>
      <img src={image12} alt="" className="image-small"/>
      <img src={image13} alt="" className="image-small"/>
    </div>
    <div className="all-buttons">
         {
        categories.map((oneCategory, index) => {
            return <button 
            className={`one-button ${oneCategory === typeOfPhoto ? "active-button" : ""}`} 
            key={index} onClick={ () => setTypeOfPhoto(oneCategory) }>
            {oneCategory}
            </button>
        })
            }
        </div>

        <div className="all-photos">
            {
            filteredPhotos.map((onePhoto) => {
                const { id, image, description, category} = onePhoto
                return <div key={id} className="one-photo">
                <img src={image} alt="" />
                <p>{description}</p>
                </div>
            })
            }
        </div>
  </div>
  
  }
  
  export default Home