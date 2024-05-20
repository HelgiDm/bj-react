import './App.css';
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import GameBoard from './components/GameBoard';
import { makeDeck, drawCard } from './components/Functions';


function App() {
  const [pick, setPick] = useState([]);

  function handleClick() {
    makeDeck();
    setPick([...pick, drawCard(), drawCard()]);

    console.log(pick)
}


  return (
   <>
    <Navbar handleClick={handleClick}/>
    <GameBoard pick={pick}/>

   </>
  );
}

export default App;
