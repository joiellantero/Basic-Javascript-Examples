function takeAgeInDays(){    
    var yearBorn = prompt("enter year born");
    var computeAge = (2020-yearBorn) * 365;

    var h4 = document.createElement('h4');
    var textAnswer = document.createTextNode("you are " + computeAge + " days old.");
    h4.setAttribute('id', 'computeAge');
    h4.appendChild(textAnswer);
    document.getElementById('result').appendChild(h4);
}

function reset(){
    document.getElementById('computeAge').remove();
}