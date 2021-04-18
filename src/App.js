import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";
import aboutimage from "./images/Frame.png";
import aboutimage1 from "./images/download.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutimage}
        title="All You Need For Daily Life"
        button="Get The App"
      />
      <Presentation />
      <About
        image={aboutimage1}
        title="Download And Get The App Now"
        button="Download"
      />
      <Contact />
    </div>
  );
}

export default App;
