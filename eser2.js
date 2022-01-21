function min(firstNumber, secondNumber) {
    //if (firstNumber < secondNumber) {
    //    return firstNumber;
    //} else {
    //    return secondNumber;
    //}
    return (firstNumber < secondNumber ? firstNumber : secondNumber);
}
//console.log(min(10, 4));

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
//console.log(isEven(75));

/*
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
function fiboList() {
    let stringa = "";
        stringa = "0, 1, "
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
function fiboNum(numPos) {
        let n1 = 0;
        let n2 = 1;
        let num;
        for (let i = 2; i < numPos; i++) {
            num = n1 + n2;
            n1 = n2;
            n2 = num;
        }
    return num;
}
console.log(fiboNum(5));
*/

