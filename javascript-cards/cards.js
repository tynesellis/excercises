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
    let newCardText = document.getElementById("initialText");//get the text typed into the text area input
    let idPlugIn = uniqueID.next().value;//get a unique id number to be added to the id's below
    newHTML.innerHTML += `
        <div class="card" id="card_${idPlugIn}">
            <section class="cardText">${newCardText.value}</section>
            <button class="byeBye" id="deleteButton_${idPlugIn}">Delete</button>
        </div>
    `
    newCardText.value = "";//reset form field
});

document.addEventListener("click", function(event){//listen for any click event 
    if (event.target.id.split("_")[0] === "deleteButton") {//test to see if the click was a delete button
    const identity = (event.target.id).split("_")[1];//extract number of button, as it will match the card container
    const childCard = document.getElementById(`card_${identity}`);//select the card that contains the delete button
    newHTML.removeChild(childCard);//remove that card by selecting it as the child of the main section with the id matching the button
    }
})