// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let newSentence = ["Look", "friggin", "out", "There's", "punctuation", "everywhere", "They", "are", "multiplying"];
/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/

let storedString = "";
let  punctation = "";

function addExcitement (theWordArray, punk) {
    for (var i = 0; i < theWordArray.length; i++) {
        let textyText = theWordArray[i];
        if ((i +1) % 3 === 0 && i > 0) {
            punctation += punk;
            textyText += punctation + " ";
        } else {textyText += " "}
        storedString += textyText;
        console.log(storedString); 
    } 
}

// Invoke the function and pass in the array
addExcitement(newSentence, "!");