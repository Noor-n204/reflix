import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/NavBar/NavBar'
import Landing from './Components/Landing/Landing'
import Catalog from './Components/Catalog/Catalog';
import MovieDetail from './Components/MovieDetail/MovieDetail';



function App() {
  return (
    <div className="App">
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/catalog" element={<Catalog />}></Route>    
        <Route path="/movies/:movieID" element={<MovieDetail />}></Route>  
        </Routes>
    </Router>
    </div>
  );
}

export default App;
