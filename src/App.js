import './App.css';
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import GameBoard from './components/GameBoard';
import { makeDeck, drawCard } from './components/Functions';


function App() {
  const [pick, setPick] = useState([]);
  const [m, setM] = useState([37]);

  function handleClick() {
    makeDeck();
    setPick([...pick, drawCard(), drawCard()]);
    setM(m - 2);
    
}


  return (
   <>
    <Navbar handleClick={handleClick}/>
    <GameBoard pick={pick} m={m}/>
   </>
  );
}

export default App;
