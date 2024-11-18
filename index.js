// Variable
let age = 17;
let years = 10;

let x = 10;
let y = 20;

let a = 'red';
let b = 'blue';
let c;

// Object

let person = {
    first: 'Neo',
    mid: 'B',
    last: 'Matias'
};

// Arrays
let selectedAnimal = ['dog','cat','monkey'];
selectedAnimal[3] = 'zebra';

// Functions
function move() {
    console.log("it Moved")
}

function evenNumber(number) {
    if(number%2 === 0) {
        return 'It is Even';
    }

    else if(typeof number == 'string') {
        return 'Please give a Number'
    }

    else {
        return 'It is Odd';
    }
}

function greet(time) {
    if(time >= 6 && time < 12) {
        console.log('Good Morning')
    }
    else if(time >= 12 && time < 18) {
        console.log('Good Afternoon')
    }
    else {
        console.log('Good Evening')
    }
}

function level(importance) {
    switch(importance) {
    case 1:
        console.log("Iron");
        break;
    case 2:
        console.log("Silver");
        break;
    case 3:
        console.log("Gold");
        break;
    case 4:
        console.log("Platinum");
        break;
    default:
        console.log("Plastic")
}
}


function maximum(nm1,nm2) {
    return (nm1 > nm2) ? nm1 : nm2;
}

function isLandscape(w,h) {
    return (w>h);
}

const output = fizzBuzz('5');
//console.log(output);

function fizzBuzz(input) {
     if(input%3 === 0 && input%5 === 0) return "FizzBuzz"
     else if(typeof input == 'number' && input%3 !== 0 && input%5 !== 0) return input
     else if(input%3 === 0) return "Fizz"
     else if(input%5 === 0) return "Buzz"
     else return "Not A Number"
     
}

let fTest = checkSpeed(74);
//console.log(fTest);
function checkSpeed(speed) {
    let test = speed - 70;
    let points = Math.floor((speed-70) / 5);

    if (points > 12) 
        return 'License suspended'
    if(speed < 75) 
        return 'OK'
    if(speed > 70) 
        return points;
}

const array = [1,2,null,NaN];

//console.log(countTruthy(array));

function countTruthy(array) {
    let x = 0;
    for(let i = 0;i< array.length;i++) {
        if(array[i]) x++
    }
    return x;
}

const movie = {
    title: 'a',
    releaseyear: 2019,
    rating: 10.1,
    director: 'b'
}

//showPropetries(movie);

function showPropetries(movie) {
    for(let index in movie) {
        if(typeof movie[index] === 'string') {
            console.log(index,movie[index])
        }
    }
}

//console.log(sum(15));

function sum(limit) {
    let ab = 0,ad = 0;
    for(let i = 0; i <= limit; i += 3) {
        ab += i;
    }
    for(let i = 0; i <= limit; i += 5) {
        ad += i;
    }
    return ab + ad;
}

const marks = [90,90,90];
//console.log(calculatedGrade(marks));
function calculatedGrade(marks) {
    let sum = 0;
    for(let v of marks) {
        sum += v / marks.length;
    }
    if(sum < 60) return 'F'
    if(sum < 70) return 'D'
    if(sum < 80) return 'C'
    if(sum < 90) return 'B'
    if(sum <= 100) return 'A'
}
//showPrimes(20);

function showPrimes(limit){
    for(let i = 2;i<=limit;i++) {
        if(isPrime(i)) 
            console.log(i);
    }
}

function isPrime(num) {
    for(let i = 2;i<=num/2;i++) 
        if(num%i == 0) 
            return false;
    return true
}


//showNumbers(20);
function showNumbers(limit) {
    for(let i = 0;i<=limit;i++) {
        console.log((i%2 == 0) ? i + ' EVEN' : i + ' ODD');
    }
}

//console.log(maximum(5,10));
//console.log(isLandscape(500,100));

function Geeks() {
    let myDiv = document.getElementById("GFG");

    let button = document.createElement('BUTTON');

    let text = document.createTextNode("Test")

    button.appendChild(text);

    myDiv.appendChild(button);
}

function jumpscare() {
    var jumpscare = document.getElementById("jumpscare")
    jumpscare.style.visibility="visible";
    var audio = document.getElementById("scream");
    audio.play();
}
c = a;
a = b;
b = c;

//console.log(a);
//console.log(b);
//console.log(evenNumber('asd'));