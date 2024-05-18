import './App.css';
import Navbar from './components/Navbar'
import GameBoard from './components/GameBoard'
import { makeDeck } from './components/Functions';


function App() {
  console.log(makeDeck())


  return (
   <>
    <Navbar />
    <GameBoard />

   </>
  );
}

export default App;
