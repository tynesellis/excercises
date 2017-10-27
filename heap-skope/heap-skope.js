const gemHeapSkope = function () { // No parameter needed
    // Resource contained inside

    /*
    The gem mine does not exist outside the barricade of the
    hëap-skopes. The Lexscopistanians build the barricade
    around their facility AND the resource.
    
    a.k.a.
    Instead of being located in an outer scope to the
    function, the gem mine is enclosed by the scope of
    the `gemHeapSkope` function.
    */
    const GemMine = {
        "Onyx": {
            "kilograms": 453
        },
        "Amethyst": {
            "kilograms": 453
        },
        "Bloodstone": {
            "kilograms": 453
        },
        "Emerald": {
            "kilograms": 453
        }
    }



    /*
    Instead of processing the entirety of the resources in
    bulk - which is what the stâck-skope does - this skope
    will return an object that has a method for processing
    each type of mineral.
    
    We're exposing the functionality of this skope to code
    in the outer scope, so that the order in which minerals
    are processed can be customized.
    
    Hëap-skopes workshops can process 5 kilograms of a
    mineral with each work order. So every time the `process`
    function is invoked, subtract 5 from the amount of the
    requested mineral from the enclosed GemMine above.
    */
    return {
        "process": function (requestedMineral) {//=================================================================================

            /*
            Subtract 5 from the total kilograms available in
            the gem mine, but make sure you stop when there
            are no minerals left.
            */
            let checkStock = function () {//function that returns the total stock of the GemMine
                let checked = 0;
                for (let minral in GemMine) {
                    checked += GemMine[minral].kilograms;
                }
                return checked
            }
//Below: if the mineral requested from outside skope exists and the stock is at least five:
            if (requestedMineral !== undefined && GemMine[requestedMineral].kilograms >= 5) {
                GemMine[requestedMineral].kilograms -= 5;//subtract 5 from the stock of the requested mineral
                if (checkStock() === 0) { mineralsStocked = false };//check the total stock of the mine.  if it's empty send word outside(change mineralsStocked to false)
                return {//return object to SkopeManager call (defined once below and contained/called in placeOrder function)
                    "mineral": requestedMineral,
                    "amount": 5
                }
//Below: if above is not satisfied, but requested mineral existed and there is a remaining amount:
            } else if (requestedMineral !== undefined && GemMine[requestedMineral].kilograms > 0) {
                let lastBit = GemMine[requestedMineral].kilograms; //set value of lastBit to the remaining kgs of the mineral
                GemMine[requestedMineral].kilograms -= lastBit;//subtract that amount from the GemMine
                if (checkStock() === 0) { mineralsStocked = false };//check the total stock of the mine.  if it's empty send word outside(change mineralsStocked to false)
                return {//return object to SkopeManager call (defined once below and contained/called in placeOrder function)
                    "mineral": requestedMineral,
                    "amount": lastBit
                }
            }

        }//====================================================================================================================
    }
}
let mineralsStocked = true;//maintains whether or not the GemMine in the skope is stocked.  if not, false value triggers push of remaining container to heapSkopeContainers(see "if(mineralsStocked..."" statement at bottom of doc)
const heapSkopeContainers = [];//final collection of containers

const gemContainerGenerator = function* () {//generate a new container with unique id - only 30 containers available
    let currentContainer = 1
    const maximumContainers = 30

    while (currentContainer <= maximumContainers) {
        yield { "id": currentContainer, "type": "Minerals", "orders": [] }
        currentContainer++
    }
};

const gemContainerInstance = gemContainerGenerator();//instance of container
let currentContainer = gemContainerInstance.next().value;//call first container
/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
const SkopeManager = gemHeapSkope();

kgCounter = 0;//stores value of kgs in container

let placeOrder = function (gemType) {//function to request a type of gem be processed
    if (kgCounter <= 560) {//if the currentContainer can take at least 5 more kgs:
        currentContainer.orders.unshift(SkopeManager.process(gemType));//push the returned object from the SkopeManager.process call to the orders array in currentContainer - must be called once so while statment below can run
        kgCounter += currentContainer.orders[0].amount;//increase the kgCounter by the amount of kg in what was just pushed
        while (currentContainer.orders[0].amount <= 5) {//while the value of returned objects is still a positive number:
            currentContainer.orders.unshift(SkopeManager.process(gemType));//push the returned object from the SkopeManager.process call to the orders array in currentContainer
            kgCounter += currentContainer.orders[0].amount;//increase the kgCounter by the amount of kg in what was just pushed
            if (currentContainer.orders[0].amount < 5) {//if the returned kgs is not the full 5, break the while loop, bc it just returned the last of that mineral
                break
            }
            if (kgCounter >= 560) {//check the container
                heapSkopeContainers.push(currentContainer);
                currentContainer = gemContainerInstance.next().value;
                kgCounter = 0;
                currentContainer.orders.unshift(SkopeManager.process(gemType));
                kgCounter += currentContainer.orders[0].amount;
                if (currentContainer.orders[0].amount < 5) {
                    break
                }
            }
        }
    } else {
        heapSkopeContainers.push(currentContainer);
        currentContainer = gemContainerInstance.next().value;
        kgCounter = 0;
    }
}

//The High Cleric of Garl Glittergold requests the stores of Onyx for to wage campaign against Necromancers in the South
placeOrder("Onyx");
//The Junior Cleric of Garl Glittergold requests the stores of Emeralds for to pay the ransom for safe return of the High Cleric
placeOrder("Emerald");
//The Constable requests the stores of Amethyst to put up as reward for the capture of the imposters of the High and Junior Clerics
placeOrder("Amethyst");
//The King requests the stores of Bloodstone as reward for the head of the inept former Skope Manager
placeOrder("Bloodstone");


if (mineralsStocked === false) { heapSkopeContainers.push(currentContainer) };


/*
Process the gems in any order you like until there none
left in the gem mine.
*/

/*
Create 30 storage containers, which is how many a hëap-skope
is equipped with.
*/


/*
Place the gems in the storage containers, making sure that
once a container has 565 kilograms of gems, you move to the
next one.
*/
console.log(heapSkopeContainers);

// let totalKGEES = 0;
// heapSkopeContainers[2].orders.forEach(function (objt) {
//     totalKGEES += objt.amount;
// })
// console.log(totalKGEES)


