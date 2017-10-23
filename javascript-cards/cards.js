let newHTML = document.getElementById("newCardsArea");//target area to write new HTML

// unique ID generator
const idGenerator = function* () {
    id = 1;
    while(true) {
        yield id;
        id ++
    }
};

const uniqueID = idGenerator();//instance of idGenerator

document.getElementById("createButton").addEventListener("click", function(){//target the create button to trigger new DOM conent
    let newCardText = document.getElementById("initialText").value;//get the text typed into the text area input
    newHTML.innerHTML += `
        <div class="card" id="card_${uniqueID.next().value}">
            <section>${newCardText}</section>
            <button id="deleteButton_${uniqueID.next().value}">Delete</button>
        </div>
    `

});

document.addEventListener("click", function(event){
    console.log(event.target.id)


})