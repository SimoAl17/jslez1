//Funzione max
/*
function max(...numbers) {
    let maxNumber = -Infinity;
    // let maxNumber = numbers[0];                          //alternativa
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (maxNumber < element) {
            maxNumber = element;
        }
    }
    return maxNumber;
}
console.log("Funzione max:",max(100, 12, 3, 1001));
*/

//Funzione min
/*
function min(...numbers) {
    let minNumber = Infinity;
    // let minNumber = numbers[0];                          //alternativa
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (minNumber > element) {
            minNumber = element;
        }
    }
    return minNumber;
}
console.log("Funzione min:",min(100, 12, 3, 1001));
*/

//Funzione che prende come paramentro un numero positivo e restituisce un array con i numeri da 0 a N
/*
function range(num) {
    let arr = [];
    for (let i = num; i >= 0; i--) {
        arr.unshift(i);
    }
    return arr;
}
console.log(range(5));
*/

//Funzione che prende come parametro un array di stringhe e mi restituisce un array di stringhe con le iniziali
/*
function startingChar(stringArray) {
    let init = [];
    for (const element of stringArray) {
        if (element !== "") {
            init.push(element[0]);
        }
    }
    return init;
}
let strings = ["Cosenza", "Genova", "Alessandria", ""]
console.log(startingChar(strings));
*/

//Sum of Range
/*
function range(end, start = 0, step = 1) {
    let arrange = [];
    for (let i = start; i <= end; i = i + step) {
        arrange.push(i);
    }
    return arrange;
}
console.log(range(10, 1));

function sumrange(array) {
    let sum = 0;
    for (const element of array) {
        sum = sum + element;
    }
    return sum;
}
//console.log(sumrange(range(10, 1, 1)));
*/

//Reverse Array
/*
function reverseArray(array) {
    let arreverse = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        arreverse.unshift(element);
    }
    return arreverse;
}
console.log(reverseArray(["A", "B", "C"]));
*/
/*
let arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const element = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = element;
    }
    return array;
}
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
*/