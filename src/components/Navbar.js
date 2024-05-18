import './Navbar.css';
// import { drawCard, vizual } from './Functions';
import { useState } from 'react';

export default function Navbar() {
    
    // const [pick, setPick] = useState([]);

    // function handleClick() {
    //     setPick([...pick, yourCard, yourCard]);
    //     console.log(pick);
    // }
        
    // function DrawPick() {
    //     pick.map((card, key) => {
    //         return <img src={vizual}></img>
    //     })
    // }
        









    return (
        <nav>
            <div id="buttons">
                <button id="start-button" type="submit">Click to start!</button>
                <button id="pick-card" type="submit">Pick A Card</button>
                <button id="fin">Finish Turn</button>
                <button id="reset" type="reset">Reset</button>
            </div>
        </nav>
    )
}