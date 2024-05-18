import './VizualCardDeck.css'
import { vizualCardBack } from './Functions'



//Function for making vizualization of cards desk
let vizualDeck = vizualCardBack().slice(1).map((elem, key) => {
    return <img key={key} src={vizualCardBack()[0]} style={{'top': elem.top, 'left': elem.left}} ></img>
});

export default function VizDeck() {
    return (
        <div className='card-deck second-row'>
            {vizualDeck}
        </div>
    )
}
