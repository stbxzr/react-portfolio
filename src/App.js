import "./App.css";

import NavbarElement from "./components/NavbarElement";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
      
      <NavbarElement />
      <Hero />
      <h4 style={{ textDecorationLine: "underline", color: 'white' }} >CHECK OUT SOME OF MY WORK BELOW!</h4>
      <Projects />

    </div>
 
  );
}

export default App;
