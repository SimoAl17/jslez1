/*
let numero = 5;                                             //dichiaro una variabile "numero" con valore 5
console.log("log variabile", numero);
const costante = 12;                                        //dichiaro una costante "costante" con valore 12
costante = 15;
console.log("log costante", costante);
var numero2 = 27;                                           //dichiaro una variabile "numero2" con valore 27
console.log("log variabile2", numero2);
*/

// questo non funziona..
// pippo = "Ciao ad alcuni..";
// console.log("log string", pippo);
// let pippo = "Ciao a tutti!";
// console.log("log string2", pippo);

// ma questo sì!
// pippo = "Ciao ad alcuni..";
// console.log("log string", pippo);
// var pippo = "Ciao a tutti!";
// console.log("log string2", pippo);

// e ora dimenticati delle var!

/*
if ((numero === 5) && (numero2 === 27)) {
    console.log("Sì!!");
} else {
    console.log("No, coglione");
}*/

/*
let numero3 = 0;
if (numero3 > 0) {
    console.log("Il numero è maggiore di 0");
} else if (numero3 < 0) {
    console.log("Il numero è minore di 0");
} else {
    console.log("Il numero è 0");
}
*/

/*
let numero4 = 16;
if (numero4 > 10) {
    console.log("Maggiore di 10");
} else if (numero4 < 10) {
    console.log("Minore di 10");
} else if (numero4 >= 0) {
    console.log("Maggiore o uguale a 0");
} else {
    console.log("Minore di 0");
}
*/

/*
let numero5 = 4;
if (numero5 % 2 === 0) {
    console.log("Divisibile per 2");
}
if (numero5 % 3 === 0) {
    console.log("Divisibile per 3");
}
*/

/*
console.log("While:");
let i = 0;
while (i < 10) {
    console.log(i);
    i++;    //va bene anche i+=1
}
*/

/*
console.log("Do While:");
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);
*/

/*
console.log("For:");
for (let k = 0; k < 10; k++) {
    console.log(k);
}
*/

/*
j = 10;
while (true) {
    if (j % 7 === 0) {
        console.log(j," è divisibile per 7");
        break;
    }
    j++;
}
for (let z = 0; z <= 100 ; z++) {
    if (z === 0) {
        continue;
    }
    if (z % 7 === 0) {
        console.log(z);
    }
}
*/

/*
let p = "#";
for (let z = 0; z < 7; z++){
    console.log(p);
    p+="#";
}
*/

/*
for (let z = 1; z < 101; z++) {
    if ((z % 3 === 0) && (z % 5 === 0)) {
        console.log(z, "FizzBuzz");
    } else if (z % 3 === 0) {
        console.log(z, "Fizz");
    } else if (z % 5 === 0) {
        console.log(z, "Buzz");
    } else {
    console.log(z);
    }
}
*/

let size = 8;
size = prompt("Inserisci la grandezza della scacchiera:");
let string = "";
for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
        if (row % 2 === 0) {
            if (col % 2 === 0) {
                string += " ";        
            } else {
                string += "#";
            }    
        } else {
            if (col % 2 === 0) {
                string += "#";        
            } else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);