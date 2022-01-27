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

function filterGene(category, value) {
    let array = [];
    for (let i = 0; i < studenti.length; i++) {
        let studente = studenti[i];
        if (studente[category] === value) {
            array.push(studente);
        }
    }
    return array;
}

console.log(filterGene("età", 26));

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

function filterGreaterThan100(arr) {
    let pulito = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] <= 100) {
            pulito.push(arr[i]);
        } 
    }
    return pulito;
}

console.log(filterGreaterThan100(arrei));

function filter(arr, func) {
    let pulito = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            pulito.push(arr[i]);
        } else {
            continue;
        }
    }
    return pulito;
}

function greaterThan30(number) {
    if (number > 30) {
        return true;
    } else {
        return false;
    }
}

console.log(filter(arrei, greaterThan30));