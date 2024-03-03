import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemeImages, setAllMemeImages] = React.useState(memesData)


function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))  
}

function handleChange(event) {
  const {name, value} = event.target
  setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
  }))
}

  /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */


  return (
    <main>
      <div className="form">
      
        <input type="text" placeholder="Top text" onChange={handleChange} name="topText" value={meme.topText} className="form--input"  />
        <input type="text" placeholder="Bottom text" onChange={handleChange} name="bottomText" value={meme.bottomText} className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  );
}
