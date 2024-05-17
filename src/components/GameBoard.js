import { useState } from 'react';
import './GameBoard.css';
import { vizual} from './Functions';
import VizualDesk from './VizualCardDesk';








export default function GameBoard() {
 
    


    return (
        <> 

            <VizualDesk />
            <img src={vizual}></img>
            <div className="field"></div>
            <div className="usr-score">
                <p>Score: </p>
                <p id="numb">0</p>
            </div>
            <div className="dlr-field"></div>
            <div className="dlr-score">
                <p>Score: </p>
                <p id="dlr-numb">0</p>
            </div>
            <div className="card-back"></div>
        </>
    )
}