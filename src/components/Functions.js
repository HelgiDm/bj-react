const cardRandom = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '6,7,8,9,10,J,Q,K,A',
    image: ['images/6_of_hearts.png', 'images/7_of_hearts.png', 'images/8_of_hearts.png', 'images/9_of_hearts.png', 'images/10_of_hearts.png',
    'images/jack_of_hearts2.png', 'images/queen_of_hearts2.png', 'images/king_of_hearts2.png', 'images/ace_of_hearts.png',
    'images/6_of_diamonds.png', 'images/7_of_diamonds.png', 'images/8_of_diamonds.png', 'images/9_of_diamonds.png', 'images/10_of_diamonds.png',
    'images/jack_of_diamonds2.png', 'images/queen_of_diamonds2.png', 'images/king_of_diamonds2.png', 'images/ace_of_diamonds.png',
    'images/6_of_spades.png', 'images/7_of_spades.png', 'images/8_of_spades.png', 'images/9_of_spades.png', 'images/10_of_spades.png',
    'images/jack_of_spades2.png', 'images/queen_of_spades2.png', 'images/king_of_spades2.png', 'images/ace_of_spades.png',
    'images/6_of_clubs.png', 'images/7_of_clubs.png', 'images/8_of_clubs.png', 'images/9_of_clubs.png', 'images/10_of_clubs.png',
    'images/jack_of_clubs2.png', 'images/queen_of_clubs2.png', 'images/king_of_clubs2.png', 'images/ace_of_clubs.png'
    ],
    makeDeck() {
        let {deck, suits, values} = this;
        let n = 0;
        for (let suit of suits) {
            for (let value of values.split(',')) {
                deck.push({
                    value,
                    suit,
                    img: this.image[n]
                });
            n += 1;
            }
        }
    return deck;
    },

    drawCard() {
        let yourCard = this.deck[Math.floor(Math.random() * this.deck.length)];
        this.deck.splice(this.deck.indexOf(yourCard), 1);
        // yourPick.push(yourCard);
        return yourCard
    },


    vizual() {
        return this.drawCard().img;
    },

    vizualCardBack() {
        let n = 0;
        while (n <= 36) {
            const arrCardBack = ['images/cardBack.png'];
            const objCardBack = {};
            objCardBack.key = n;
            objCardBack.top = `${20 - n * 0.05}vh`,
            objCardBack.left = `${6 - n * 0.05}vw`,
            arrCardBack.push;
            n += 1;
            return arrCardBack;
        }
    },



}

cardRandom.makeDeck()
cardRandom.drawCard()

export let vizual = cardRandom.vizual(); // return value for <img src="">
export let vizualCrdBck = cardRandom.vizualCardBack(); // return array, containing of value for <img src=""> and coordinates for cards in the desk
