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


//ESERCIZI

//Sum of Range
/*
function range(start, end, step) {
    let arrange = [];
    if (step === undefined) {
        step = 1;
    }
    for (let i = start; i <= end; i = i + step) {
        arrange.push(i);
    }
    return arrange;
}
//console.log(range(1, 10));

function sumrange(array) {
    let sum = 0;
    for (const element of array) {
        sum = sum + element;
    }
    return sum;
}
//console.log(sumrange(range(1,10, 1)));
*/

//Reverse Array
/*
function reverseArray(array) {
    to be continued..
}
console.log(reverseArray([1, 2, 3, 4, 5]));
*/