let point = {x: 2, y: 3};                    //dichiarazione di un oggetto

let student = {name: "Simone", surname: "Aloia", yob: 1997, married: false};

let student1 = {name: "Alessandro", surname: "Capogreco", yob: 2002, married: false};

let classe = {name: "Programmatore Frontend", students: [student, student1]};

let andrea = {name: "Andrea", surname: "Asioli", "classe di cui è docente": classe};

//console.log(andrea);
//console.log(andrea.surname);
//console.log(andrea["classe di cui è docente"]);

let nomeStudente1 = student1.name;
//console.log(nomeStudente1);

student1.name = "Pippo";
//console.log(student1);

//console.log(student1.titoloDiStudio);

student1.titoloDiStudio = "Diploma di Maturità";

//console.log(student1);
/*
for (const key in student1) {
    if (Object.hasOwnProperty.call(student1, key)) {
        const element = student1[key];
        console.log(key + ": " + element);
    }
}
*/

//console.log(JSON.stringify(andrea));

let oggettoInStringa = '{"name":"Andrea","surname":"Asioli","classe di cui è docente":{"name":"Programmatore Frontend","students":[{"name":"Simone","surname":"Aloia","yob":1997,"married":false},{"name":"Pippo","surname":"Capogreco","yob":2002,"married":false,"titoloDiStudio":"Diploma di Maturità"}]}}'

let AndreaCopy = JSON.parse(oggettoInStringa);

//console.log(AndreaCopy);

function CalcolaTriangoloRettangolo(catetoMaggiore, catetoMinore, ipotenusa) {
    let per = catetoMaggiore + catetoMinore + ipotenusa;
    let ar = (catetoMaggiore * catetoMinore) / 2;
    return {perimetro: per, area: ar}
}

let dimensioniTriangolo = CalcolaTriangoloRettangolo(4, 3, 5);

//console.log("Il triangolo ha il perimetro di: " + dimensioniTriangolo.perimetro + " e l'area di: " + dimensioniTriangolo.area);



let firstNumber = 5;
function addOne() {
    firstNumber = firstNumber + 1;
    return firstNumber;
}
let secondNumber = addOne(firstNumber);

//console.log(firstNumber);                                 //6 perché side effect
//console.log(secondNumber);                                //6 per opera della funzione


let userAndrea = {name: "Andrea Asioli", age: 43}
let myAccount = {userAndrea, balance: 100}

//console.log(myAccount);

function changeAge(newAge, account) {
    let tempAccount = {...account};                         //Copia il balance ma anche la REFERENCE dell'user,
    tempAccount.userAndrea.age = newAge;                    //perciò le modifiche verranno apportate anche all'user originale!
    //let tempAccount = JSON.parse(JSON.stringify(account)) //Copiando l'oggetto in un JSON e poi riconvertendolo in
    return tempAccount;                                     //un oggetto puoi copiare l'oggetto e i suoi sotto-oggetti  
}                                                           //senza copiare la reference

//console.log(changeAge(50, myAccount));
/*
function addMoney(moneyToAdd, account) {
    //let tempAccount2 = {};
    //tempAccount2 = Object.assign(tempAccount2, account);
    //tempAccount2.balance = tempAccount2.balance + moneyToAdd;
    //return tempAccount2;
    
    let tempAccount2 = {...account}
    tempAccount2.balance = tempAccount2.balance + moneyToAdd;
    return tempAccount2;
}
let updatedAccount = addMoney(50, myAccount);
console.log(myAccount);                         //150 perché passaggio per riferimento
console.log(updatedAccount);                    //150 per opera della funzione
*/

let student2 = {name: "Simone", surname: "Aloia", age: 24};
console.log(Object.keys(student2));

/* COMPLETARE
for (const key in student2) {
    if (Object.hasOwnProperty.call(student2, key)) {
        const element = student2[key];
        
    }
}

for (const iterator of object) {
    
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
*/

let pippo = {name: "Pippo", city: "Topolinia"}
let pippo2 = pippo;
let pippo3 = {name: "Pippo", city: "Topolinia"}

//console.log(pippo === pippo2); //TRUE perché hanno la stessa reference
//console.log(pippo === pippo3); //FALSE perché hanno lo stesso contenuto ma non la stessa reference


const age = 5;
const name1 = "Osvaldo";
let baby = {age, name: name1};

//console.log(baby);


let finalArray = [23, 13, 5, 12];
//function sumFirst4ElementsOfArray(array) {
//    return array[0] + array[1] + array[2] + array[3];
//}

function sumFirst4ElementsOfArray(el0, el1, el2, el3) {
    return el0 + el1 + el2 + el3;
}

