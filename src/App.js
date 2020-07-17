import React from 'react'
import axios from 'axios'
import Hero from './components/ui/Hero'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css';

const App = () => {
  

  return (
    <div className="container">
        <Hero />
        <CharacterGrid  />
        {/* <Footer /> */}
    </div>
  );
}

export default App;
