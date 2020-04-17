console.log('hello');
// alert('hi');

var b = 'smoothie';
// console.log(b);

var someNumber = 45;
// console.log(someNumber);


                    // Manipulate DOM ith Javascript (Changing HTML with Javascript)

// var age = prompt('What is your age?');
// document.getElementById('someText').innerHTML = age


                    // NUMBERS

// var num1 = prompt('Enter a number: ');
// var num2 = prompt('Enter another number: ');
// document.getElementById('someText').innerHTML = "sum = " + num1 * num2;


                    // FUNCITONS 

function fun(){
    alert('this is a function');
}

// fun();

// var name = prompt('Enter your name: ');

function greet(){
    document.getElementById('someText').innerHTML = "Hello " + name;
}

// greet(name);

                    // FUNCTION ARGUMENTS

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

// sumNumbers(1, 10);

                    // WHILE LOOPS

// var num = 0;
// while (num < 100){
//     num++;
//     console.log(num);
// }

                    // DATA TYPES

let name = {
    first: 'Jane', 
    last: 'Doe'
}
let fruit = 'Banana';

console.log(name.last.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by a char


                    // Array

let fruits = ['banana', 'apple', 'orange', 'pineapples'];
let fruits2 = new Array ('banana', 'apple', 'pear', 'pineapples');

// console.log(fruits[2]);

console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'), fruits);
console.log(fruits.sort()); //sorting strings

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b})); // sorting numbers

let emptyArray = new Array();
for (let num = 1; num <= 10; num++){
    emptyArray.push(num);
    console.log(emptyArray[num]);
}

let student = {
    first: 'John', 
    last: 'Doe',
    age: 25,
    height: 170,

    studentInfo: function(){
        return "Name: " + this.first + this.last + "\nAge: " + this.age;
    }
};

console.log(student.first);
student.first = 'notJohn';
console.log(student.first);
console.log(student.studentInfo());

