function divideByTwo(myNumber) {                            //funzione standard
    let result = myNumber / 2;
    return result;
}
// console.log(divideByTwo(6));

let capitalize = function(myString) {                       //funzione anonima
    return myString.toUpperCase();
}
console.log(capitalize("pippo"));

//capitalize = divideByTwo;
//console.log(capitalize(2));

let multiplyByTwo = (myNumber) => myNumber * 2;             //funzione elegante

let multiplyBy2 = (myNumber) => {                           //funzione meno elegante per operazioni più complesse
    let result = myNumber * 2;
    return result;
}

let pippo = 8;
function scriviPippo() {
    let pippo = "pippo";
    console.log(pippo);
}
scriviPippo();
console.log(pippo);

function multiplyBy4(firstNumber) {
    function multiplyBy2(secondNumber) {
        return secondNumber * 2;
    }
    let result = multiplyBy2(firstNumber) * 2;
    return result;
}
console.log(multiplyBy4(5));

/*
function multiplyBy4(firstNumber) {                             //alternativa
    function multiplyBy2(secondNumber) {
        return secondNumber * 2;
    }
    let result = multiplyBy2(multiplyBy2(firstNumber));
    return result;
}
console.log(multiplyBy4(5));
*/

function fibonacci(number) {
    if (number === 0) {
        return 0;
    }
    if (number === 1) {
        return 1;
    }
    return fibonacci(number-1) + fibonacci(number-2);
}
console.log(fibonacci(2));

function somma(primoNumero, secondoNumero) {
    return primoNumero + secondoNumero;
}
let risultato = somma();

function minus(primoNumero, secondoNumero) {
    if (secondoNumero === undefined) {
        return -primoNumero;        
    }    else {
        return primoNumero - secondoNumero;
    }
}
console.log(minus(20, 5));

function multiplyBy(firstNumber, secondNumber = 2) {
    return firstNumber * secondNumber;
    
}
console.log(multiplyBy(5, 7));

let variable = 4;
let myFunction;
if (variable >= 0) {
    let multiplier = 2;
    myFunction = function(number) {
        return number * multiplier;
    }
} else {
    let multiplier = 3;
    myFunction = function(number) {
        return number * multiplier;
    }
}
let result = myFunction(4);
console.log(result);


function multiplyByNumber(moltiplicatore) {
    return (number) => number * moltiplicatore;
}
let moltiplicaPer2 = multiplyByNumber(2);
let moltiplicaPer3 = multiplyByNumber(3);
let moltiplicaPer4 = multiplyByNumber(4);
console.log(moltiplicaPer2(5));
console.log(moltiplicaPer3(5));
console.log(moltiplicaPer4(5));


function applicaFunzioneSuNumero(mioNumero, funzioneDaApplicare) {
    return funzioneDaApplicare(mioNumero);
}
function dividiPer2(numero) {
    return numero / 2;
}
function dividiPer3(numero) {
    return numero / 3;
}
let res1 = applicaFunzioneSuNumero(8, dividiPer2);
console.log(res1);
let res2 = applicaFunzioneSuNumero(8, dividiPer3);
console.log(res2);