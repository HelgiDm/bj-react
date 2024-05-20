import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { makeDeck, drawCard, vizual, vizualCardBack, handleClick, DrawPick } from './Functions';
// import { useEffect, useState } from 'react';
let yourPick = [];



export function Navbar({ handleClick }) {
    
    
    
    return (
        <nav>
            <div id="buttons">
                <button id="start-button" type="submit" onClick={handleClick}>Click to start!</button>
                <button id="pick-card" type="submit">Pick A Card</button>
                <button id="fin">Finish Turn</button>
                <button id="reset" type="reset">Reset</button>
            </div>
        </nav>
    )
}

export { yourPick }