
import React from "react";
// import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Typical from 'react-typical';
// import Text from "./Text";
import './Caraousal.css';
import MiddleCard from "./middlecards";

import img1 from './Image/image1.png'
import img2 from './Image/image2.png'
import img3 from './Image/image3.png'
import img4 from './Image/image4.png'

function Caraousal() {
  return (
      <>
          

          <div className="AboutPhoto">
        <img src={require("./Image/Surgicare.png")} alt={'photos'} className="car-img" />
          </div>
          
      <div className="typo">


        <strong className="bg-yellow-400 px-1">
          <h3>Looking for</h3>
          <Typical
               steps={[
                  'Second Opinion',
                  1000,
                  'Third Opinion',
                  1000,
                  'Fourth Opinion',
                  1000,
                  ]}
                  wrapper="p"
                  loop={Infinity}
          />
        </strong>

      </div>

      <div className="butt-1">
      <Button className="cara-btn">Piles</Button>{' '}
      <Button className="cara-btn">Fistula</Button>{' '}
      <Button className="cara-btn">Fissure</Button>{' '}
      <Button className="cara-btn">Pilonidal Sinus</Button>{' '}
      <Button className="cara-btn">Varicose Veins</Button>{' '}
      <Button className="cara-btn">Varicocele</Button>{' '}
      <Button className="cara-btn">Varicocele</Button>{' '}
      <Button className="cara-btn">Kidney Stone</Button>{' '}
      <Button className="cara-btn">Phimosis</Button>{' '}
      <div className="but-2">
      <Button className="cara-btn">Hydrocele</Button>{' '}
      <Button className="cara-btn">Cataract</Button>{' '}
      <Button className="cara-btn">Lasik</Button>{' '}
      <Button className="cara-btn">Hernia</Button>{' '}
      <Button className="cara-btn">Gallabladder</Button>{' '}
      <Button className="cara-btn">Appendix</Button>{' '}
      </div>
      </div>

      <div className="but-3">
      <Button className="cara-btn-2" size="lg" >
        Book a Free Consultation
      </Button>{' '}
      <Button className="cara-btn-2" size="lg"  >
        +91
      </Button>{' '}
      </div>
      <div className="last-part">
        <MiddleCard img={img1} txt="Personalised health 
services at hospitals" header="24/7" />
        <MiddleCard img={img2} txt="Doctors with over 
1,000 years of combined experience" header="100+" />
        <MiddleCard img={img3} txt="Partner hospitals that provide premium care"
        header="120+"/>
        <MiddleCard img={img4} txt="Surgeries performed daily" header="100+" />
      </div>
     
      </>
      );
}

export default Caraousal;