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

