let firstArray = [1, true, "pippo"];

console.log(firstArray);

let secondArray = ["pippo", "pluto", "paperino"];
console.log(secondArray.length);

for (let i = 0; i < secondArray.length; i++) {
    const element = secondArray[i];
    console.log(element);
}

for (const element of secondArray) {
    console.log(element);
}

secondArray.push("topolino");



let ultimoElemento = secondArray.pop();
console.log(secondArray);
console.log(ultimoElemento);


let primoElemento = secondArray.shift();
console.log(secondArray);
console.log(primoElemento);

secondArray.unshift("paperone");
console.log(secondArray);

console.log(secondArray[1]);
secondArray[1] = "paperina";
console.log(secondArray);


let thirdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let subArray = thirdArray.slice(2, 5);

console.log(subArray);


console.log(thirdArray);

let subArray2 = thirdArray.splice(2, 3);
console.log(subArray2);
console.log(thirdArray);

let numeroPiuGrande = Math.max(5, 10, 2)
console.log(numeroPiuGrande);
let numeroPiuGrandeDellaArray = Math.max(...thirdArray);
console.log("numero più grande dell'array", numeroPiuGrandeDellaArray);


function stringaPiuLunga(...stringhe) {
    let str = ""

    for (let i = 0; i < stringhe.length; i++) {
        const element = stringhe[i];
        if (str.length < element.length) {
            str = element;
        }
    }

    return str;
}

console.log(stringaPiuLunga("pippo", "topolino", "pluto"));


// function max(...numbers) {
// let n = -Infinity;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (n < element) {
//         n = element;
//     }
    
    
// } 
//    return n;

// }

// console.log(max(-100,-12,-3,-1001,-4));  //=> 1001 

// ES 1
function min(...numbers)

 {
    let n = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (n >element) {
            n = element;
        }
        
        
    } 
       return n;
    
    }
    
    console.log(min(-100,-12,3,-1001,4));  //=> 3





// ES 2 prendere come parametro un numero positivo e restituisce un array con i numeri da 0 a n
let array=[];
function range(maxNumber) {
  for (let i = 0; i <= maxNumber; i++) {
     
      array.push(i);
  }   
  return array;
}
console.log(range(5)); //=> [0,1,2,3,4,5]






//ES 3 funzione che prende come parametro un array di stringhe e mi restituisce un array di stringhe con le iniziali 

function startingChar(stringArray) {
    let array1 = []
    for (let i = 0; i < stringArray.length; i++) {
        const element = stringArray[i];
        if (element !=="") {
            array1.push(element[0]);
        }
    }
    return array1;
}

let strings = ["Cosenza","Genova","Alessandria"]


console.log(startingChar(strings));  //=> ["C", "G", "A"]


