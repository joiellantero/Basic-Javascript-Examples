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
    document.getElementById('image').remove();
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
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
} 

function randomColors(){
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(randColors(choices));
    }
}

function randColors(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

