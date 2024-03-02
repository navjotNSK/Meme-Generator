import { useState } from 'react';
import trollface from '../assets/trollface.png';
import '../App.css';


function Navbar() {
    const [count, setCount] = useState(0)
  
    return (
      
      <>
       
   <nav className="header">
   <img src={trollface} className="header--image"alt="Header logo" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
</nav>
   </>
    )
  }

  export default Navbar

  