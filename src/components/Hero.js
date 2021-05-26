import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
import Figure from "react-bootstrap/Figure";
const Hero = () => {
  return (
    <Jumbotron fluid style={{ backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49e62e3-9d09-4452-a762-f750621d25bd/d77gofi-b6abe652-def0-445e-be4d-da2391b402a2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0OWU2MmUzLTlkMDktNDQ1Mi1hNzYyLWY3NTA2MjFkMjViZFwvZDc3Z29maS1iNmFiZTY1Mi1kZWYwLTQ0NWUtYmU0ZC1kYTIzOTFiNDAyYTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RLHe-LbZD7piYqYX9WM9KuNSVuEz6mf0aNfm-ndfr2k)`, backgroundSize: 'cover' }}>
        <h1 style={{ color: 'white' }}>HELLO!</h1>
         
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHrBSJwU1zIvw/profile-displayphoto-shrink_800_800/0/1617230826014?e=1627516800&v=beta&t=1zMxRF9pmjFDJ0_FqFExmxb614SbbBfPhVKa17Sfg_Y"
        />
       
        <h3 style={{ fontStyle: "italic" }} style={{ color: 'white' }}>
          My name is Julian Almendarez, i'm 26 years old and i'm from Arlington
          Texas. I'm an asipiring software developer who
          loves eating pizza.
        </h3>
      </Figure>
    

      
   
       
   
    </Jumbotron>
  );
};

export default Hero;
