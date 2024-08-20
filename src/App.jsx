import React from 'react'
import "./app.scss";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/parallax';
import Services from './components/services/Services';
import Protofolio from './components/protfolio/Protofolio';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type="service"/>
      </section>
      <section>
        <Services />
      </section>
      <section id='Portfolio'>
        <Parallax type="protfolio" />
      </section>
      <Protofolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  )
}

export default App
