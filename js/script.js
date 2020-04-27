// Your Age in Days

function takeAgeInDays(){
    var age = prompt("What year were you born?");
    var ageInDays = (2020-age) * 365;

    var p = document.createElement('p');
    var textAnswer = document.createTextNode("You are " + ageInDays + " days old.");
    p.setAttribute('id', 'ageInDays');
    p.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(p);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

// cat generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('cat-flex-box');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    // div.setAttribute('id', 'image');
    div.appendChild(image);
}

function removeCat(){
}

// rock, paper, scissors

function decideWinner(humanChoice, botChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    };

    var humanScore = rpsDatabase[humanChoice][botChoice];
    var botScore = rpsDatabase[botChoice][humanChoice];

    return [humanScore, botScore];
}

function finalMessage([humanScore, botScore]){
    if (humanScore == 1){
        return {'message': 'You won!', 'color': '#5cb85c'};
    }

    else if (humanScore == 0){
        return {'message': 'You lost!', 'color': '#d9534f'};
    }

    else {
        return {'message': 'You tied!', 'color': '#f0ad4e'};
    }
}

function botRandChoice(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    var choices = ['rock', 'paper', 'scissors']; // 1 = paper; 2 = rock; 3 = scissors
    var botChoice = botRandChoice(choices);
    console.log("human >> " + humanChoice);
    console.log("bot >> " + botChoice);
    var results = decideWinner(humanChoice, botChoice);
    console.log(results);
    finalMessage(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
} 

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    console.log(botImageChoice);
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='-webkit-filter: drop-shadow(5px 5px 5px #0275d8); filter: drop-shadow(5px 5px 5px #0275d8);'> <div> HUMAN </div>"
    messageDiv.innerHTML = "<h3 style='margin-top: 60px; -webkit-filter: drop-shadow(5px 5px 5px" + finalMessage.color + "); filter: drop-shadow(5px 5px 5px" + finalMessage.color + ");'>" + finalMessage.message + "</h3>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='-webkit-filter: drop-shadow(5px 5px 5px #5bc0de); filter: drop-shadow(5px 5px 5px #5bc0de);'> <div> BOT </div>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}


// Change the color of all buttons

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonRed();
    }
    else if (buttonThingy.value === 'green'){
        buttonGreen();
    }
    else if (buttonThingy.value === 'reset'){
        buttonColorReset();
    }
    else if (buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonRed() {
    for(let i = 3; i < 7; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for(let i = 3; i < 7; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for(let i = 3; i < 7; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
} 

function randomColors(){
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for(let i = 3; i < 7; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(randColors(choices));
    }
}

function randColors(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}


// blackjack

let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2S', '3S', '4S', '5S',  '6S', '7S', '8S', '9S', '10S', 'KS', 'QS', 'JS', 'AS',
                '2C', '3C', '4C', '5C',  '6C', '7C', '8C', '9C', '10C', 'KC', 'QC', 'JC', 'AC',
                '2D', '3D', '4D', '5D',  '6D', '7D', '8D', '9D', '10D', 'KD', 'QD', 'JD', 'AD',
                '2H', '3H', '4H', '5H',  '6H', '7H', '8H', '9H', '10H', 'KH', 'QH', 'JH', 'AH'
            ],
    'cardsMap': {'2S': 2, '3S': 3, '4S': 4, '5S':  5,  '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'KS': 11, 'QS': 12, 'JS': 13, 'AS': [1, 11],
                    '2C': 2, '3C': 3, '4C': 4, '5C':  5,  '6C': 6, '7C': 7, '8C': 8, '9C': 9, '10C': 10, 'KC': 11, 'QC': 12, 'JC': 13, 'AC': [1, 11],
                    '2D': 2, '3D': 3, '4D': 4, '5D':  5,  '6D': 6, '7D': 7, '8D': 8, '9D': 9, '10D': 10, 'KD': 11, 'QD': 12, 'JD': 13, 'AD': [1, 11],
                    '2H': 2, '3H': 3, '4H': 4, '5H':  5,  '6H': 6, '7H': 7, '8H': 8, '9H': 9, '10H': 10, 'KH': 11, 'QH': 12, 'JH': 13, 'AH': [1, 11],

            },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
    'hitOver': false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('sounds/cardPlace.wav');
const dealSound = new Audio('sounds/cardRemove.wav');
const winSound = new Audio('sounds/gameWin.mp3');
const loseSound =  new Audio('sounds/gameOver.mp3');
const drawSound  = new Audio('sounds/gameDraw.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
    if (blackjackGame['isStand'] === false){
        let card = randomCard();
        showCard(YOU, card);
        updateScore(YOU, card);
        showScore(YOU);
    }
}

function showCard(activePlayer, card){
    if (activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal(){
    if (blackjackGame['turnsOver'] === true && blackjackGame['hitOver'] === true){
        blackjackGame['isStand'] = false;

        dealSound.play();

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (let i = 0; i < yourImages.length; i++){
            yourImages[i].remove();
        }

        for (let i = 0; i < dealerImages.length; i++){
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;
        
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjackGame['turnsOver'] = true;
        blackjackGame['hitOver'] = false;
    }   
}

function randomCard() {
    let index = Math.floor(Math.random() * 52);
    return blackjackGame['cards'][index];
}

function updateScore(activePlayer, card){
    if (card  === 'AC' || card === 'AD' || card === 'AH' || card === 'AS'){
        if( activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21 ){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }

        else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }

    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }    
}

function showScore(activePlayer){
    if (activePlayer['score'] <= 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }

    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic(){
    blackjackGame['isStand'] = true;
    blackjackGame['hitOver'] = true;

    while (DEALER['score'] <= 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(DEALER, card);
        updateScore(DEALER, card);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

function computeWinner(){
    let winner;

    if ( YOU['score'] <= 21 ){
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            blackjackGame['wins']++;
            winner = YOU;
        }

        else if (YOU['score'] < DEALER['score']){
            blackjackGame['losses']++;
            winner = DEALER;
        }

        else if (YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }
    }

    else if (YOU['score'] > 21 && DEALER['score'] <= 21){
        blackjackGame['losses']++;
        winner = DEALER;
    }

    else if (YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
    }

    return winner;
}

function showResult(winner){
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true){
         if (winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }

        else if (winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            loseSound.play();
        }

        else{
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
            drawSound.play();
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }   
}








 