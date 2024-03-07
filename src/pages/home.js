import React, { useState } from 'react';
import '../styles/home.css';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import  Home1  from '../assets/Fwd_ pour digit food/6.png';
import Home2 from '../assets/Fwd_ pour digit food/Indian1.jpg';
import Navbar from '../Components/Navbar';

function Home() {
  const [index, setIndex] = useState(0);
  var images = [ Home1, Home2 ];

  const turn = () => {
    if (index < images.length -1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div className="home" style={{
      textAlign: 'center',
      display: 'flex',
      minHeight: '100vh',
      width: '100vw',
      position: 'absolute',
      left: '0',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      backgroundImage: `url(${images[index]})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <Navbar/>
      <div className="headerContainer">
        <div className="Arrays">
          <WestIcon className="arrow" onClick={turn} />
          <EastIcon className="Arrows" onClick={turn}/>
        </div>
        <p>SIMPLE ET MODULABLE</p>
        {/* <p>MODULABLE</p> */}
        <button className="test">TESTER MAINTENANT</button>
      </div>
    </div>
  )
}

export default Home;
