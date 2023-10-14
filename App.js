import React from 'react';
import './App.css';
import PortfolioScene from './components/PortfolioS';
import Navbar from './components/Navbar';
import Header from './components/Header';


function App() {
  return (
    <div className="App"> 
    <Navbar />
      <header className="App-header">
        <PortfolioScene />
      </header>
    </div>
  );
}

export default App;
