import React from 'react';
import './Home.css';

import img from'../components/img/Profile.jpg'

const Home = () => {
  return (
    <>
      <div className="center-box" id="homesection">
        <div className="bordered-box">
          <div className="hero">
            
            <h1>DHARSHINI SUBANU S</h1>
            <h2>Web Developer | Open Source Developer</h2>
            <img src={img} alt='dharshu' className='dharshini' /> 
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;

