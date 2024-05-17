import { vizualCrdBck } from './Functions';

//Function for making vizualization of cards desk
let vizualDesk = vizualCrdBck.slice(1).map((elem, key) => {
    return <img key={key} src={vizualCrdBck[0]} top={elem.top} left={elem.left}></img>
});

export default function VizDesk() {
    return (
        <>
            {vizualDesk}
        </>
    )
}
