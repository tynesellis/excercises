let newHTML = document.getElementById("newCardsArea");

// unique ID generator
const idGenerator = function* () {
    id = 1;
    while(true) {
        yield id;
        id ++
    }
};

const uniqueID = idGenerator();//instance of idGenerator

document.getElementById("createButton").addEventListener("click", function(){
    let newCardText = document.getElementById("initialText").value;
    newHTML.innerHTML += `
        <div id="card_${uniqueID.next()}">
            <section>${newCardText}</section>
            <button id="button_${uniqueID.next()}">Delete</button>
        </div>
    `

})