import { useState } from 'react';
import './GameBoard.css';
// import { yourCard, vizual } from './Functions';
import VizualDeck from './VizualCardDeck';









export default function GameBoard() {
    // let yourPick = [];
    // console.log(yourPick);
    // yourPick.push(yourCard);
    // console.log(yourPick);

    return (
        <> 
            <div className='first-row'>
                <div className="dlr-field"></div>
                <div className="dlr-score">
                    <p>Score: </p>
                    <p id="dlr-numb">0</p>
                </div>
            </div>
            <VizualDeck />
            <div className='third-row'>
                <div className="field"></div>
                <div className="usr-score">
                    <p>Score: </p>
                    <p id="numb">0</p>
                </div>
            </div>

            <div className="card-back"></div>
        </>
    )
}