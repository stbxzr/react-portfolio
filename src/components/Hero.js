import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
import Figure from "react-bootstrap/Figure";
const Hero = () => {
  return (
    <Jumbotron fluid>
        <h1>HELLO!</h1>
         
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHrBSJwU1zIvw/profile-displayphoto-shrink_800_800/0/1617230826014?e=1627516800&v=beta&t=1zMxRF9pmjFDJ0_FqFExmxb614SbbBfPhVKa17Sfg_Y"
        />
       
        <h3 style={{ fontStyle: "italic" }} style={{ color: 'black' }}>
          My name is Julian Almendarez, i'm 26 years old and i'm from Arlington
          Texas. I'm an asipiring software developer who
          loves eating pizza.
        </h3>
      </Figure>
    

      
   
       
   
    </Jumbotron>
  );
};

export default Hero;
