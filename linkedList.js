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

//Codice per ciclare fra i nodi

while (true) {                                  
    //console.log(node.valore);               
    if (node.prossimo !==null) {                    //Se il prossimo nodo è diverso da null
        node = node.prossimo;                       //Avanza al prossimo nodo
    } else {
        break;
    }
}


//Altro codice per ciclare fra i nodi

while (node != null) {                              //Finchè il nodo attuale è diverso da null
//    console.log(node.valore);
    node = node.prossimo;                           //Avanza al prossimo nodo
}


//Funzione che inserisce un nuovo elemento nella linked list

let mioPrimoNodo = {};
function addElementToLinkedList(primoNodo, valore) {
    if (primoNodo.valore === undefined) {                                    //Se il primo nodo non ha valore allora inseriscilo lì
        primoNodo.valore = valore;
        primoNodo.prossimo = null;
        primoNodo.precedente = null;
    } else {
        let ultimoNodo = primoNodo;                                          //Altrimenti continua a scorrere fino a trovare la coda
        while (ultimoNodo.prossimo != null) {
            ultimoNodo = ultimoNodo.prossimo;
        }
        let nodo = {valore: valore, precedente: ultimoNodo, prossimo: null}; //E collega un nuovo nodo con il valore
        ultimoNodo.prossimo = nodo;
    }
}

addElementToLinkedList(mioPrimoNodo, 6)
//console.log(mioPrimoNodo);
addElementToLinkedList(mioPrimoNodo, 12)
//console.log(mioPrimoNodo);


//Funzione che converte una linked list in un array

function linkedListToArray(linkedList) {
    node = linkedList;
    let array = [];
    let cont = 0;
    while (node != null) {
        array[cont] = node.valore;
        cont++;
        node = node.prossimo;
    }
    return array;
}

console.log("Da Linked List ad Array: ", linkedListToArray(primoElemento));


//Funzione che converte un array in una linked list

let array = [7, 8, 12, 5];
function arrayToLinkedList(array) {
    let lList = {valore: array[0], precedente: null, prossimo: null};                   //Crea il primo nodo col primo valore
    if (array.length > 1) {
        let codaNodo = lList;                                                           //Il primo nodo è attualmente la coda
        for (let i = 1; i < array.length; i++) {
            let nodoAttuale = {valore: array[i], precedente: codaNodo, prossimo: null}  //Crea un nuovo nodo, collegalo alla coda..
            codaNodo.prossimo = nodoAttuale;                                            //E viceversa
            codaNodo = nodoAttuale;                                                     //Infine il nuovo nodo diventa la coda
        }
    }
    return lList;
}

console.log("Da Array a Linked List: ", arrayToLinkedList(array));
console.log("Prova del nove: ", linkedListToArray(arrayToLinkedList(array)));


let bibuba = {valore: 24, precedente: null, prossimo: null}
let obobo = {valore: 14, precedente: null, prossimo: bibuba}
bibuba.precedente = obobo;

//Funzione che aggiunge un nuovo elemento in coda alla lista

function prepend(value, listNode) {
    let nodoAttuale = listNode;
    while (nodoAttuale.prossimo != null) {
        nodoAttuale = nodoAttuale.prossimo;
    }
    let node = {valore: value, precedente: nodoAttuale.precedente, prossimo: null}
    nodoAttuale.prossimo = node;
    return listNode;
}
prepend(107, obobo);

//Funzione che recupera il valore nel nodo indicato

function nth(listNode, number) {
    let nodoAttuale = listNode;
    if (number === 1) {
        return nodoAttuale.valore;
    } else {
        for (let i = 1; i < number; i++) {
            nodoAttuale = nodoAttuale.prossimo;
        }
        if (nodoAttuale === null) {
            return "error";
        } else {
            return nodoAttuale.valore;
        }
    }
}
console.log(nth(obobo, 3));
