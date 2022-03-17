import {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Starships from './pages/Starships/Starships';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Starships />}/>
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
