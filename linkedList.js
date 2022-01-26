let lastElement = {value: 3, nextElement: null};
let secondElement = {value: 7, nextElement: lastElement};
let firstElement = {value: 5, nextElement: secondElement};

//console.log(firstElement.value, secondElement.value, lastElement.value);

let primoElemento = {valore: 5, prossimo: null, precedente: null};
let secondoElemento = {valore: 9, prossimo: null, precedente: primoElemento};
primoElemento.prossimo = secondoElemento;
let terzoElemento = {valore: 8, prossimo: null, precedente: secondoElemento};
secondoElemento.prossimo = terzoElemento;
let quartoElemento = {valore: 2, prossimo: null, precedente: terzoElemento};
terzoElemento.prossimo = quartoElemento;

let node = primoElemento;

let mioPrimoNodo = {};
function addElementToLinkedList(primoNodo, valore) {
    if (primoNodo.valore === undefined) {
        primoNodo.valore = valore;
        primoNodo.prossimo = null;
        primoNodo.precedente = null;
    } else {
        let ultimoNodo = primoNodo;
        while (ultimoNodo.prossimo != null) {
            ultimoNodo = ultimoNodo.prossimo;
        }
        let nodo = {valore: valore, precedente: ultimoNodo, prossimo: null};
        ultimoNodo.prossimo = nodo;
    }
}

addElementToLinkedList(mioPrimoNodo, 6)
console.log(mioPrimoNodo);
addElementToLinkedList(mioPrimoNodo, 12)
console.log(mioPrimoNodo);



//while (true) {
//    console.log(node.valore);
//    if (node.prossimo !==null) {
//        node = node.prossimo;
//    } else {
//        break;
//    }
//}

while (node != null) {
    console.log(node.valore);
    node = node.prossimo;
}


//Funzione che converte una linked list in un array

function linkedListToArray(p) {
    
}

console.log(linkedListToArray());

//Funzione che converte un array in una linked list

function arrayToLinkedList(array) {
    
}

console.log(arrayToLinkedList());