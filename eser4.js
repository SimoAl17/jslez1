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

function filter(category, value) {
    let array = [];
    for (let i = 0; i < studenti.length; i++) {
        let studente = studenti[i];
        if (studente[category] === value) {
            array.push(studente);
        }
    }
    return array;
}

console.log(filter("età", 26));

