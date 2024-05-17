import { useState } from 'react';
import './GameBoard.css';
import { vizual} from './Functions';
import VizualDesk from './VizualCardDesk';








export default function GameBoard() {
 
    


    return (
        <> 
            <div className='first-row'>
                <div className="dlr-field"></div>
                <div className="dlr-score">
                    <p>Score: </p>
                    <p id="dlr-numb">0</p>
                </div>
            </div>
            <VizualDesk />
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