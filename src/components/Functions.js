import { deck, suits, values, image } from './indata'

function makeDeck() {
    let n = 0;
    for (let suit of suits) {
        for (let value of values.split(',')) {
            deck.push({
                value,
                suit,
                img: image[n]
            });
        n += 1;
        }
    }
return deck;
};

function drawCard() {
    let yourCard = deck[Math.floor(Math.random() * deck.length)];
    deck.splice(deck.indexOf(yourCard), 1);
    return yourCard
};

function vizual() {
    return drawCard().img;
}

function vizualCardBack() {
    let n = 0;
    const arrCardBack = ['images/cardBack.png'];
    while (n <= 36) {
        const objCardBack = {};
        objCardBack.key = n;
        objCardBack.top = `${0 - n * 0.05}vh`;
        objCardBack.left = `${6 - n * 0.05}vw`;
        arrCardBack.push(objCardBack);
        n += 1;
    }
    return arrCardBack;
}


export { makeDeck, drawCard, vizual, vizualCardBack }






// cardRandom = {

// }

// cardRandom.drawCard()

// export { drawCard }; // return Card Object
// export let vizual = cardRandom.vizual(); // return value for <img src="">
// export let vizualCrdBck = cardRandom.vizualCardBack(); // return array, containing of value for <img src=""> and coordinates for cards in the desk
