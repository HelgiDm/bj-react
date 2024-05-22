import React, { useState } from 'react';
import './GameBoard.css';
import { yourCard, vizual } from './Functions';
import VizualDeck from './VizualCardDeck';
// import { yourPick } from './Navbar';









export default function GameBoard( {pick, m} ) {
    
      
    return (
        <> 
            <div className='first-row'>
                <div className="dlr-field"></div>
                <div className="dlr-score">
                    <p>Score: </p>
                    <p id="dlr-numb">0</p>
                </div>
            </div>
            <VizualDeck m={m}/>
            <div className='third-row'>
                <div className="field">
                    {pick.map((card, index) => {return <img key={index} src={card.img}></img>})}
                </div>
                <div className="usr-score">
                    <p>Score: </p>
                    <p id="numb">0</p>
                </div>
            </div>

            <div className="card-back"></div>
        </>
    )
}