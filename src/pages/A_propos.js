import React, { useState } from "react";
import "../styles/A_propos.css";
import  Home1  from '../assets/Fwd_ pour digit food/6.png';
import Home2 from '../assets/Fwd_ pour digit food/Indian1.jpg';
import Navbar from "../Components/Navbar";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

function A_propos() {
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
        <div className="about" style={{
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
        <div className="Arrays">
          <WestIcon className="arrow" onClick={turn} />
          <EastIcon className="Arrows" onClick={turn} />
        </div>
            <div className="aboutTop"></div>
                <div className="aboutBottom">
                    <h1>A propos de nous</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
                    </p>
                </div>
            </div>
    );
}

export default A_propos;