/*
//Funzione che restituisce il minore fra due valori:
function min(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return firstNumber;
    } else {
        return secondNumber;
    }
}
//console.log(min(10, 4));
*/


/*
//Funzione che restituisce il minore fra due valori - alternativa:
function min(firstNumber, secondNumber) {
    return (firstNumber < secondNumber ? firstNumber : secondNumber);
}
console.log(min(10, 4));
*/


/*
//Funzione che controlla se un numero è pari o dispari:
function isEven(numero) {
    if (numero === 0) {
        return true;
    }
    if (numero === 1) {
        return false;
    }
    if (numero > 0){
        return isEven(numero - 2);
    } else {
        return isEven(numero + 2);
    }
}
console.log(isEven(75));
*/


/*
//Funzione che conta le B:
function countBs(stringa) {
     let conta = 0;
     for (let i = 0; i < stringa.length; i++) {
         if (stringa[i] === "B") {
             conta++;
         }
     }
     return conta;
 }
 console.log(countBs("BBC"));
*/


/*
//Funzione che conta il carattere inserito - case sensitive:
function countChar(stringa, char) {
    let conta = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i] === char){
            conta++;
        }
    }
    return conta;
}
console.log(countChar("kakkerlak", "k"));
*/


/*
//Funzione che conta il carattere inserito - case insensitive:
function countChar(stringa, char) {
    let conta = 0;
    char = char.toLowerCase();
    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i] === char){
            conta++;
        }
    }
    char = char.toUpperCase();
    for (let j = 0; j < stringa.length; j++) {
        if (stringa[j] === char){
            conta++;
        }
    }
    return conta;
}
console.log(countChar("kakkerlak", "k"));
*/


/*
//Funzione che elenca la Successione di Fibonacci da 0 a 100:
function fiboList() {
    let stringa = "0, 1, ";
        let n1 = 0;
        let n2 = 1;
        for (let i = 2; i <= 100; i++) {
            let num = n1 + n2;
            stringa += num;
            stringa += ", ";
            n1 = n2;
            n2 = num;
        }
    return stringa;
}
console.log(fiboList());
*/


/*
//Funzione che restituisce il numero della Successione di Fibonacci che si trova alla posizione data:
function fiboNum(numPos) {
    let n1 = 0;
    let n2 = 1;
    let num;
    if (numPos === 0) {
        return 0;
    }
    if (numPos === 1 || numPos === 2) {
        return 1;
    }
    for (let i = 2; i < numPos; i++) {
        num = n1 + n2;
        n1 = n2;
        n2 = num;
    }
    return num;
}
console.log(fiboNum(2));
*/


/*
//Funzione che, se il numero dato è presente nella Successione di Fibonacci, ne restituisce la posizione:
function fiboPos(fibN) {
    let n1 = 0;
    let n2 = 1;
    let num;
    let conta = 1;
    if (fibN === 0) {
        console.log("Trovato, è alla posizione numero 0");
    } else if (fibN === 1) {
        console.log("Trovato, è alla posizione numero 1");
    } else {
        while (true) {
            num = n1 + n2;
            n1 = n2;
            n2 = num;
            conta++;
            if (fibN === num) {
                console.log("Trovato, è alla posizione numero ", conta);
                break;
            }
            if (fibN < num) {
                console.log("Questo numero non fa parte della successione di Fibonacci");
                break;
            } 
        }
    }
}
fiboPos(3)
*/


/*
//Funzione che calcola ricorsivamente il fattoriale:
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(1));
*/




