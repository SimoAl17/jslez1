const text = "L'Ateniese Milziade, figlio di Cimone, spiccava fra tutti sia per l'antichità della stirpe, sia per la gloria degli antenati, sia per la propria saggezza ed aveva un'età tale che i suoi concittadini potevano non più solo concepire buone speranze su di lui, ma anche confidare che sarebbe stato quale ebbero poi modo, alla prova, di riscontrare, quando gli Ateniesi decisero di inviare dei coloni nel Chersoneso. Ce n'era un grande numero e molti chiedevano di partecipare alla spedizione, tra loro ne furono scelti alcuni e inviati a Delfi per consultare l'oracolo di Apollo su chi dovessero preferire come comandante. Quelle regioni infatti le occupavano allora i Traci e con loro bisognava combattere. La Pizia in risposta a chi la interrogava, ordinò espressamente che si prendessero come capo Milziade: se lo avessero fatto, l'impresa avrebbe avuto buon esito. In seguito al responso dell'oracolo, Milziade con truppe scelte parti con la flotta per il Chersoneso e, approdato a Lemno voleva ridurre gli abitanti dell'isola sotto il dominio degli Ateniesi e chiese ai Lemnii di arrendersi spontaneamente; quelli, schernendolo, risposero che lo avrebbero fatto quando lui, salpato con la flotta da casa sua, avesse raggiunto Lemno con il vento di tramontana. Questo vento infatti sorgendo da settentrione tiene la direzione contraria per chi parte da Atene. Milziade, non avendo tempo di trattenersi, indirizzò la rotta verso la sua meta e arrivò nel Chersoneso."

//Statistiche testo
console.log("Statistiche testo:");
console.log("Numero caratteri: ", text.length);

function replaceWithSpaces(text) {
    text = text.replace(/,/g, "");
    text = text.replace(/;/g, "");
    text = text.replace(/:/g, "");
    text = text.replace(/'/g, " ");
    text = text.replace(/\./g, "");
    return text;
}

function countWords(text) {
    let array = [];
    array = text.split(" ");
    return array.length;
}
console.log("Numero parole: ", (countWords(replaceWithSpaces(text))));

function repeatedWords(text) {
    let array = [];
    let array2 = [];
    array = text.split(" ");
    for (const word of array) {
        let count = 0;
        for (const words of array) {
            if (word === words) {
                count++
            }
        }
        let countedWord = "La parola \"" + word + "\" compare " + count;
        if (count === 1) {
            countedWord += " volta."
        } else {
            countedWord += " volte."
        }
        array2.push(countedWord);
    }
    let setCountedWords = [...new Set(array2)];
    for (const element of setCountedWords) {
        console.log(element);
    }
}
repeatedWords(replaceWithSpaces(text));

//Funzione di ricerca

function searchWord(text, word) {
    let array = [];
    text = replaceWithSpaces(text);
    array = text.split(" ");
    let arrayOfIndexes = [];
    let index = 0;
    while (index <= array.length) {
        if (array[index] === word) {
            arrayOfIndexes.push(index)
        }
        index++;
    }
    console.log("La parola", word, "si trova agli indici ", ...arrayOfIndexes);
}

searchWord(text, "Milziade");

//Prompt di ricerca

function startSearch(){
    let array = [];
    let text2 = replaceWithSpaces(text);
    array = text2.split(" ");
    let arrayOfIndexes = [];
    const word = prompt("inserisci la parola da cercare")
    let index = 0;
    while (index <= array.length) {
        if (array[index] === word) {
            arrayOfIndexes.push(index)
        }
        index++;
    }
    alert("La parola " + word + " si trova agli indici " + arrayOfIndexes);
}