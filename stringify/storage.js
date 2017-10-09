// Items  in house objects
const gateleg = {
        name: "Gateleg Table",
        type: "furniture",
        location: "Living Room",
        description: "Antique gateleg table, given to me by my parents.  It has been in the family for at least three generations."
    }

const coffeeTable = {
    name: "Coffee Table",
    type: "furniture",
    location: "Living Room",
    description: "Coffee table I built after I broke my old one."
}

const staff = {
    name: "Hiking Staff",
    type: "outdoors",
    location: "Master Bedroom",
    description: "Double handled hiking staff made of cyprus, finished with high sheen toung oil"
}

const enoHammock = {
    name: "Eno Hammock",
    type: "outdoors",
    location: "Guest Room",
    description: "Eno hammock. Camping is so much better."
}

const tv1 = {
    name: "LG TV",
    type: "electronics",
    location: "Living Room",
    description: "LG flatscreen TV"
}

const tv2 = {
    name: "Toshiba TV",
    type: "electronics",
    location: "Master Bedroom",
    description: "LG flatscreen TV"
}

const mainBed = {
    name: "Main Bed",
    type: "furniture",
    location: "Master Bedroom",
    description: "LG flatscreen TV"
}

const campStove = {
    name: "Camping Stove",
    type: "outdoors",
    location: "Guest Room",
    description: "Coleman two burner camping stove"
}

const couch = {
    name: "Couch",
    type: "furniture",
    location: "Living room",
    description: "Sectional couch"
}

const dresser = {
    name: "Dresser",
    type: "furniture",
    location: "Master Bedroom",
    description: "Six drawer dresser with mirror"
}

let house =[dresser, couch, campStove, mainBed, tv2, tv1, enoHammock, staff, coffeeTable, gateleg];

let furniture = [];
let outdoors = [];
let electronics = [];
let sorted = [furniture, outdoors, electronics];
let namesHack = ["furniture", "outdoors", "electronics"]

for (var i = 0; i < sorted.length; i++) {
    sortedCat = sorted[i];
    for (var t = 0; t < house.length; t++) {
        var hObject = house[t];
        if (hObject["type"] === namesHack[i]) {
            sortedCat.push(hObject)
        } 
    }

}

let homeInventoryDB = {
    "furniture": furniture,
    "outdoors": outdoors,
    "electronics": electronics
}

const homeInventoryString = JSON.stringify(homeInventoryDB);
localStorage.setItem("homeBaseStuff", homeInventoryString);

