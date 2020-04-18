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
    if (
            (!humanChoice.localeCompare('paper') && botChoice == 2) ||
            (!humanChoice.localeCompare('rock') && botChoice == 3) ||
            (!humanChoice.localeCompare('scissors') && botChoice == 1)
        ){

        results = 1;
    }

    else if (
                (!humanChoice.localeCompare('paper') && botChoice == 3) ||
                (!humanChoice.localeCompare('rock') && botChoice == 1) ||
                (!humanChoice.localeCompare('scissors') && botChoice == 2)
            ){

        results = -1;
    }

    else if (
                (!humanChoice.localeCompare('paper') && botChoice == 1) ||
                (!humanChoice.localeCompare('rock') && botChoice == 2) ||
                (!humanChoice.localeCompare('scissors') && botChoice == 3)
            ){

        results = 0;
    }

    else {
        results = -2;
    }

    return results;
}

function finalMessage(results){
    if (results == 1){
        return {'message': 'You won!', 'color': 'green'};
    }

    else if (results == -1){
        return {'message': 'You lost!', 'color': 'red'};
    }

    else if (results == 0){
        return {'message': 'You tied!', 'color': 'yellow'};
    }

    else{
        console.log('ERROR');
    }
}

function botRandChoice(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    var botChoice = [1, 2, 3]; // 1 = paper; 2 = rock; 3 = scissors
    var results = decideWinner(humanChoice, botRandChoice(botChoice));
    finalMessage(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
} 

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
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

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'>"
}


