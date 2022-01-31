let studente1 = {nome: "Simone", cognome: "Aloia" , età: 24 , sesso: "M"};
let studente2 = {nome: "Alessandro", cognome: "Capogreco", età: 19, sesso: "M"};
let studente3 = {nome: "Francesca", cognome: "Capuzzo", età: 26, sesso: "F"};
let studente4 = {nome: "Andrea", cognome: "Ferruggia" , età: 30, sesso: "M"};
let studente5 = {nome: "Nicolò", cognome: "Giuggiola", età: 29, sesso: "M"};
let studente6 = {nome: "Fjoralba", cognome: "Myrtaj", età: 27, sesso: "F"};
let studente7 = {nome: "Michael", cognome: "Parodi", età: 26, sesso: "M"};
let studente8 = {nome: "Matteo", cognome: "Rinaldi", età: 28, sesso: "M"};
let studente9 = {nome: "Marco", cognome: "Sorci", età: 24, sesso: "M"};
let studente10 = {nome: "Lorenzo", cognome: "Miranza", età: 22, sesso: "M"};

let studenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10];


//Filtro età

function filterAge(age) {
    let arrayEtà = [];
    for (let i = 0; i < studenti.length; i++) {
        let studente = studenti[i];
        if (studente.età === age) {
            arrayEtà.push(studente);
        }
    }
    return arrayEtà;
}

console.log(filterAge(24));


//Filtro sesso

function filterSex(sex) {
    let arraySex = [];
    for (let i = 0; i < studenti.length; i++) {
        let studente = studenti[i];
        if (studente.sesso === sex) {
            arraySex.push(studente);
        }
    }
    return arraySex;
}

console.log(filterSex("F"));


//Filtro generico

function genericFilter(category, value) {
    let array = [];
    for (let i = 0; i < studenti.length; i++) {
        let studente = studenti[i];
        if (studente[category] === value) {
            array.push(studente);
        }
    }
    return array;
}

console.log(genericFilter("età", 26));


//Aggiungi un nuovo elemento all'array a patto che sia dello stesso tipo degli elementi già presenti

let numeri = [1, 5, 2];

function addElementIfCompatible(arr, value) {
    if ((typeof arr[0]) === (typeof value)) {
        arr.push(value);
        return arr;
    } else {
        return "Questo elemento non è compatibile";
    }
}

console.log(addElementIfCompatible(numeri, "pippo"));


//Pulisci l'array dagli elementi di tipo diverso da quello indicato

let misto = [1, 2, true, 3, "pippo", false];

function cleanArray(arr, tipo) {
    let pulito = [];
    for (let i = 0; i <= arr.length; i++) {
        if ((typeof arr[i]) === tipo) {
            pulito.push(arr[i]);
        }
    }
    return pulito;
}

console.log(cleanArray(misto, "boolean"));

let arrei = [100, 101, 9, 1000, 12, -3]


//Rimuovi i valori maggiori di 100

function filterToRemoveGreaterThan100(arr) {
    let pulito = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] <= 100) {
            pulito.push(arr[i]);
        } 
    }
    return pulito;
}

console.log(filterToRemoveGreaterThan100(arrei));


//Funzione che filtra i numeri maggiori di 30

function greaterThan30(number) {
    if (number > 30) {
        return true;
    } else {
        return false;
    }
}


//Usa la funzione che filtra i numeri maggiori di 30 per filtrare l'array

function filter(arr, func) {
    let pulito = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            pulito.push(arr[i]);
        }
    }
    return pulito;
}


console.log(filter(arrei, greaterThan30));


//I 3 modi per creare funzioni

function isNegative(element, index) {
    return element < 0;
}

let isNegative2 = function(element, index) {          //Si può scrivere anche come "myArray.filter(function(element){return element < 0;})"
    return element < 0;
}

let isNegative3 = (element, index) => element < 0;    //Si può scrivere anche come "myArray.filter((element) => element < 0;)"


//Funzione che rimuove gli elementi in posizione dispari

function hasEvenPosition(element, index) {
    if (index % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(arrei.filter(function(element, index){         //Filter permette di filtrare con la funzione indicata
    return index % 2 === 0;
}));

console.log(arrei.filter((e, i) => i % 2 === 0));


//Funzione MAniPulation

function addOneToArray(arrayToModify) {
    let tempArray = [];
    for (const element of arrayToModify) {
        let modifiedElement = element + 1;
        tempArray.push(modifiedElement);
    }
    return tempArray;
}

console.log(addOneToArray(arrei));


function map(arrayToModify, alterationFunction) {
    let tempArray = [];
    for (const element of arrayToModify) {
        let modifiedElement = alterationFunction(element);
        tempArray.push(modifiedElement);
    }
    return tempArray;
}

function addOne(element) {
    return element + 1;
}

console.log(map(arrei, addOne));                            //Map permette di modificare con la funzione indicata
//              ||
console.log(arrei.map(addOne));
//              ||
console.log(arrei.map(function(element){
    return element +1;
}));
//              ||
console.log(arrei.map((element) => element + 1));

function elementIndexProduct(element, index) {
    return element * index;
}

console.log(arrei.map(elementIndexProduct));
console.log(arrei.map(function(element, index){
    return element * index;
}));
console.log(arrei.map((element, index) => element * index));

console.log(arrei.map(elementIndexProduct).filter(isNegative));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let testArray1 = [12, 57, 1001, -67, -12, 5, 27, 48, -6000];
let testArray2 = ["pippo", "pluto", "paperino", "topolino", "paperone", "paperoga"];

//Teniamo i numeri divisibili per 3:
let divideBy3 = function(element) {
    return element % 3 === 0;
}
let filteredArray1 = testArray1.filter(divideBy3);
console.log(filteredArray1);


//Teniamo le stringhe che sono più lunghe di 6 caratteri:
console.log(testArray2.filter(function(element){
    return element.length > 6;
}));


//Tutti i numeri dovranno essere ridotti del 10%:
console.log(testArray1.map(function(element){
    return element - element / 100 * 10;
}));


//Tutte le stringhe dovranno essere maiuscole:
let toUp = function(element) {
    return element.toUpperCase();
}
let mappedArray2 = testArray2.map(toUp);
console.log(mappedArray2);


//Tutti i numeri andranno trasformati in positivi e andranno eliminati i numeri maggiori di 100:
let positive = function(element) {
    return element = Math.sqrt((Math.pow(element, 2)));
}
let filterGreaterThan100 = function(element) {
    return element <= 100;
}
let modifiedArray1 = testArray1.map(positive).filter(filterGreaterThan100);
console.log(modifiedArray1);


//Tutte le stringhe dovranno avere la prima lettera maiuscola e andranno eliminate le stringhe che non contengono la lettera R:
let capFirstLet = function(element) {
    return element[0].toUpperCase() + element.substring(1, element.length);
}
let removeIfDsntContainR = function(element) {
    return element.includes("r");
}
let modifiedArray2 = testArray2.map(capFirstLet).filter(removeIfDsntContainR);
console.log(modifiedArray2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sumAllArray(arrayToSum){
    let result = 0;
    for (const element of arrayToSum) {
        result = result + element;
    }
    return result;
}

console.log(sumAllArray(testArray1));


function sum(first, second) {
    return first + second;
}

function product(previous, current, index) {
    return previous * current;
}

function sumEvenIndex(previous, current, index) {
    if (index % 2 === 0) {
        return previous + current;
    } else {
        return previous;
    }
}

function reduce(arrayToAggregate, aggregationFunction, startingElement) {
    let result;
    let startingIndex;
    if (startingElement !== undefined) {
        result = startingElement;
        startingIndex = 0;
    } else {
        result = arrayToAggregate[0];
        startingIndex = 1;
    }
    for (let i = startingIndex; i < arrayToAggregate.length; i++) {
        const element = arrayToAggregate[i];
        result = aggregationFunction(result, element, i, arrayToAggregate);
    }
    return result;
}

console.log(reduce(testArray1, sum));
console.log(reduce(testArray1, product));
console.log(reduce(testArray1, sumEvenIndex));

console.log(testArray1.reduce((previous, current, index, array) => previous + current));
console.log(testArray2.reduce(dividiStringhe, []));
console.log(testArray1.reduce(sumBySign, {}));

function dividiStringhe(previous, current) {
    if (current[0] === "p") {
        if (previous[0]) {
            previous[0].push(current);
        } else {
            previous[0] = [];
            previous[0].push(current);
        }
    } else {
        if (previous[1]) {
            previous[1].push(current);
        } else {
            previous[1] = [];
            previous[1].push(current);
        }
    }
    return previous;
}

function sumBySign(previous, current) {
    if (current >= 0) {
        if (previous.sumOfPositive) {
            previous.sumOfPositive = previous.sumOfPositive + current;
        } else {
            previous.sumOfPositive = 0;
            previous.sumOfPositive = previous.sumOfPositive + current;
        }
    } else {
        if (previous.sumOfNegative) {
            previous.sumOfNegative = previous.sumOfNegative + current;
        } else {
            previous.sumOfNegative = 0;
            previous.sumOfNegative = previous.sumOfNegative + current;
        }
    }
    return previous;
}

let testArray3 = ["la", "vergogna", "casa", "dannazione", "ha", "pippo", "preso", "secchio", "fuoco"];
// "la casa ha preso fuoco"
function caseInFiamme(previous, current, index) {
    if (index % 2 === 0) {
        return previous + current;
    } else {
        return previous + " ";
    }
}

console.log(reduce(testArray3, caseInFiamme));
console.log(testArray3.reduce((previous, current, index) => index % 2 === 0 ? previous + current : previous + " "));


//Usa reduce e concat per unire 3 array in un unico array

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((previous, current, index) => previous.concat(arrays[index])));


//Ciclo FOR high order

function loop(value, test, update, body) {
    for (let i = value; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);


//Every

function everyLoop(array, test) {
    for (const element of array) {
        if (test(element) === false) {
            return false;
        }
    }
    return true;
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));

function everySome(array, test) {
    if (array.some(n => n > 10)) {
        return false;
    }
    return true;
}

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));


///////////////////////////////////////////////////////////////////

let array4 = [12, 345, -1234, 1, 0, 23456, -2, 2, 3];

//Reduce => Maggiore

console.log(array4.reduce((previous, current) => current > previous ? previous = current : previous = previous));


//Reduce => Minore

console.log(array4.reduce((previous, current) => current < previous ? previous = current : previous = previous));


//Somma dei pari

console.log(array4.reduce((previous, current) => current % 2 === 0 ? previous = current + previous : previous = previous));


//////////////

let array5 = ["Pippo", "Paperone", "Gambadilegno", "Basettoni", "Clarabella", "Orazio"];

let string = "Pippo";

function checkIfStringContainsAVowel(string) {
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (char === "a") {
            return true;
        }
        if (char === "e") {
            return true;
        }
        if (char === "i") {
            return true;
        }
        if (char === "o") {
            return true;
        }
        if (char === "u") {
            return true;
        }
    }
    return false;
}

function checkIfStringContainsAVowel2(str) {

    return ["a", "e", "i", "o", "u"].some((v) => str.includes(v));
}

function checkIfStringNotContainsAVowel(str) {

    // let vowels = ["a", "e", "i", "o", "u"];
    // return !vowels.some((v) => string.includes(v));
    return !["a", "e", "i", "o", "u"].some((v) => str.includes(v));
}

console.log(checkIfStringContainsAVowel(string));
console.log(checkIfStringContainsAVowel2(string));
console.log(checkIfStringNotContainsAVowel(string));

function arrayOfVowels(str){
    let arrayFromString = [...str];
    let vowelsArray = arrayFromString.filter(checkIfStringContainsAVowel2)
    return vowelsArray;
}

function arrayOfConsonants(str){
    let arrayFromString = [...str];
    let vowelsArray = arrayFromString.filter(checkIfStringNotContainsAVowel)
    return vowelsArray;
}

console.log(arrayOfVowels(string));
console.log(arrayOfConsonants(string));

let arrayOfCon = arrayOfConsonants(string);

let setOfConsonants = new Set(arrayOfCon);         //Crea un SET. È come un array, ma rimuove i doppioni nei valori

let stringOfCon = [...setOfConsonants].join("");

console.log(stringOfCon);
console.log([...new Set(arrayOfConsonants(string))].join(""))

function fromStringToVowelArray(string){
    return [...string].filter(c => ["a", "e", "i", "o", "u"].some(v => v === c.toLowerCase()))
}

console.log(array5.reduce((p, c) => [...p, ...fromStringToVowelArray(c)], []));


function fromStringToConsonantsString(string){
    let consonantsArray = [...string.toLowerCase()].filter(c => !["a", "e", "i", "o", "u"].some(v => v === c.toLowerCase()));
    return consonantsArray.join("");
}

console.log(array5.reduce((p, c) => [...new Set([...(p + fromStringToConsonantsString(c))])].join(""), ""));

array5.forEach((e) => console.log(e));


for (const string of array5) {
    console.log(string.toUpperCase());
}


array5.forEach((e) => console.log(e.toUpperCase()));


console.log(array4.sort());

console.log(array5.sort());

/////////////////////////////////////////////////////////////////////////

let stud1 = {name:"pippo", age:12, gender: "m"};

let stud2 = {name:"pluto", age:18 , gender: "m"};

let stud3 = {name:"topolina", age:13, gender: "f"};

let stud4 = {name:"paperina", age:18, gender: "f"};

let students = [stud1, stud2, stud3, stud4];


console.log(students.sort(compareStudents3));           //Le funzioni compare spiegano al sort secondo quale proprietà deve ordinare gli oggetti


function compareStudents(st1, st2){
    if (st1.age > st2.age) {
        return 1;
    }

    if (st1.age < st2.age) {
        return -1;
    }

    if (st1.age === st2.age) {
        return 0;
    }
}


function compareStudents2(st1, st2){
    return st1.gender.localeCompare(st2.gender);
}

function compareStudents3(st1, st2) {
    return st2.age - st1.age
}

////////

let athlete1 = {name: "giovanni", surname:"landi", position: 2}
let athlete2 = {name: "lorena", surname:"landi", position: 2}
let athlete3 = {name: "pippo", surname:"barbigli", position: 1}
let athlete4 = {name: "simona", surname:"perri", position: 3}
let athlete5 = {name: "elmo", surname:"recalcati", position: 2}

let athletes = [athlete1, athlete2, athlete3, athlete4, athlete5];



console.log([...athletes]);


athletes.sort((s1, s2)=> s1.position - s2.position)

function compareBySurname(stud1, stud2) {
    return stud1.surname.localeCompare(stud2.surname);
}
/*
function compareByPosition(stud1, stud2) {             NON FUNZIONA??
    return stud1.position.localeCompare(stud2.position);
}*/

/*
function compareByPositionPlus(stud1, stud2) {
    
}*/

console.log(athletes.sort(compareBySurname));
console.log(athletes.sort(compareByPosition));