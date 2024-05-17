import './Navbar.css'
import Functions from './Functions'

export default function Navbar() {
    return (
        <nav>
            <div id="buttons">
                <button id="start-button" type="submit">Click to start!</button>
                <button id="reset" type="reset">Reset</button>
                <button id="pick-card" type="submit">Pick A Card</button>
                <button id="fin">Finish Turn</button>
            </div>
        </nav>
    )
}