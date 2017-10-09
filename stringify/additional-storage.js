const storedInventory = JSON.parse(localStorage.getItem("homeBaseStuff"));

let backpack = {
    name: "Backpack",
    type: "outdoors",
    location: "Guest Room",
    description: "REI Great Star backpack."
}

storedInventory.outdoors.push(backpack);

let footstool = {
    name: "Footstool",
    type: "furniture",
    location: "Living Room",
    description: "Cube shaped footstool"
}

storedInventory.furniture.push(footstool);

let wifi = {
    name: "Apple Airport",
    type: "electronics",
    location: "Living Room",
    description: "Wireless-n router from Apple"
}

storedInventory.electronics.push(wifi);

const newStoredInventory = JSON.stringify(storedInventory);
localStorage.setItem("homeBaseStuff", newStoredInventory);


