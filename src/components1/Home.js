import React from 'react';
import './Home.css'; 

import img from '../components1/img/Profile.jpg'; 

function Home() {
  return (
    <div className="home" id="homesection">
      <section className="hero">
        <div className="overlay">
        <h1>DHARSHINI SUBANU S</h1>
        <p>Web Developer | Open Source Developer</p>
          <img src={img} alt="Profile" />
        </div>
      </section>
    </div>
  );
}

export default Home;



