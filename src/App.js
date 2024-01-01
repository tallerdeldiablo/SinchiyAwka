import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Personajes from './components/Personajes';
import CharacterDetailPage from './components/CharacterDetailPage';
import Atahualpa from './components/Atahualpa';
import Pintag from './components/Pintag'; // Import Pintag component
import Quilago from './components/Quilago'; // Import Quilago component
import Ruminahui from './components/Ruminahui'; 
import Jumanji from './components/Jumanji'; // Import Jumanji component
import Anton from './components/Anton'; // Import Anton component
import Videos from './components/Videos';
import Footer from './components/Footer';
import './App.css';

function App() {
  const handleRouteChange = (route) => {
    console.log(`Clicked ${route}`);
  };

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajes/atahualpa" element={<Atahualpa />} />
         <Route path="/personajes/pintag" element={<Pintag />} />
          <Route path="/personajes/quilago" element={<Quilago />} />
          <Route path="/personajes/ruminahui" element={<Ruminahui />} />
          <Route path="/personajes/jumanji" element={<Jumanji />} />
          <Route path="/personajes/anton" element={<Anton />} />
          <Route path="/personajes/:characterId" element={<CharacterDetailPage />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
