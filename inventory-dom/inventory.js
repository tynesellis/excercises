const HomeInventory = JSON.parse(localStorage.getItem("homeBaseStuff")); //gets data from browser storage and parses to an object

let sectionHTML = document.getElementsByClassName("inventory")[0]; //selects section of DOM for us to add stuff to

for (let arr in HomeInventory) { // start by looping through the returned object (HomeInventory) which, at the next level, is a series of arrays
    let currentArray = HomeInventory[arr]; //sets currentArray to whatever array is selected in each cycle of the loop
    for (let i = 0; i < currentArray.length; i++) { //cycle through the each array 
        let currentObject = currentArray[i]; //set currentObject to whatever i === while going through the array. each time, i will be selecting an object
            //now we're going start adding to sectionHTML (see above loop) while writing to the DOM in that section
            sectionHTML.innerHTML +=  `<section class="${currentObject.type.replace(/ /g, "")}">
            <h2 id="${currentObject.name.replace(/ /g, "")}">${currentObject.name}</h2>
            <p id="${currentObject.type.replace(/ /g, "")}">Type: ${currentObject.type.charAt(0).toUpperCase() + currentObject.type.slice(1, (currentObject.type.length +1))}</p>
            <p id="${currentObject.location.replace(/ /g, "")}">Location: ${currentObject.location}</p>
            <p id="${currentObject.description.replace(/ /g, "")}">Description: ${currentObject.description}</p>
            </section>`; //classes and ids are populated with the corresponding key from the objects
            // replace(/ /g, "") added to take out spaces to conform to css naming conventions
        
    }       
}


    
