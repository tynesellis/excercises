let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
let arrayz = [bands, vegetables];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");
let htmlRef = [bandElement, veggieElement];

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < arrayz.length; loopTracker += 1) {
    ref = htmlRef[loopTracker]; //stores what will be written in HTML
    let currentArray = arrayz[loopTracker];
    for (var i = 0; i < currentArray.length; i++) {
          // Get a reference to the current item in the  array
        let currentItem = currentArray[i];
        let newID = currentItem.replace(/ /g, "");
        ref.innerHTML += `
        <p id="${newID}">${currentItem}</p>
        `
    }
}

let correction = document.getElementById("BoyzIIMen");
correction.innerHTML += ` **Not actually a boy band**`