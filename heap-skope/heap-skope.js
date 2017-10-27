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
let mineralsStocked = true;//maintains whether or not the GemMine in the skope is stocked.  if not, false value triggers push of... 
//..remaining container to heapSkopeContainers(see "if(mineralsStocked..."" statement at bottom of doc)
const heapSkopeContainers = [];//final collection of containers
/*
Create 30 storage containers, which is how many a hëap-skope
is equipped with.
*/
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
/*
Place the gems in the storage containers, making sure that
once a container has 565 kilograms of gems, you move to the
next one.
*/
let individualGemStocks = {//starts value of whether or not a certain gem is stocked at true
    "Onyx": true,
    "Amethyst": true,
    "Bloodstone": true,
    "Emerald": true
}

let placeOrder = function (gemType) {//function to request a type of gem be processed

    //The magic hasn't happened yet -- this is just a function that shows up a few times.. if the container is about to overflow - you'll see
    const itsBoutFull = function () {
        heapSkopeContainers.push(currentContainer);//...push the current container to heapSkopeContainers
        currentContainer = gemContainerInstance.next().value;//get the next container
        kgCounter = 0;//reset the kgCounter
        currentContainer.orders.unshift(SkopeManager.process(gemType));//do the next order, so the while loop has something to evaluate
        kgCounter += currentContainer.orders[0].amount;//increase the kgCounter by the amount of kg in what was just pushed
    }
    //Still not rocking and rolling yet - this one shows up a few times too - when the container and stock are good, this processes and evaluates in a loop
    const processGems = function () {
        while (currentContainer.orders[0].amount <= 5) {//while the value of returned objects is still the full amount or a positive number:
            currentContainer.orders.unshift(SkopeManager.process(gemType));//push the returned object from the SkopeManager.process call to the orders array in currentContainer
            kgCounter += currentContainer.orders[0].amount;//increase the kgCounter by the amount of kg in what was just pushed
            //=====Below===== After each order is added: run two tests:=====================
            if (currentContainer.orders[0].amount < 5) {//Test 1: if the returned kgs is not the full 5, break the while loop, bc it just returned the last of that mineral
                individualGemStocks[gemType] = false;//Update the individualGemStocks value to show that this gemType is no longer available
                console.log("The " + gemType + " order has been filled.")//Send message that the order has been filled
                break//break out of the while loop
            }
            if (kgCounter >= 560) {//Test 2: If the above test doesn't break the loop, Check the container - if it's over 560kg, the next order could overflow it so...:
                itsBoutFull();
                if (currentContainer.orders[0].amount < 5) {//if the returned kgs is not the full 5, break the while loop, bc it just returned the last of that mineral
                    individualGemStocks[gemType] = false;//Update the individualGemStocks value to show that this gemType is no longer available
                    console.log("The " + gemType + " order has been filled.")//Send message that the order has been filled
                    break//break out of the while loop
                }
            }
        }
    }

    //****************This is where stuff gets rolling in one of three scenarios*************************** */

    //===========Scenario 1: The requested gem is out of stock==================================================

    if (individualGemStocks[gemType] === false) {//If the gemType requested is out of stock, don't run the rest of the function and...
        console.log("I'm sorry, but we are out of " + gemType);//...return a message that it is out of stock
    }

    //===========Scenario 2: The requested gem is in stock and the current container can handle the next order==================================================

    else if (kgCounter <= 560) {//if the currentContainer can take at least 5 more kgs:

        currentContainer.orders.unshift(SkopeManager.process(gemType));//push the returned object from the SkopeManager.process call to the orders array in currentContainer - must be called at least once so while statment below can run
        kgCounter += currentContainer.orders[0].amount;//increase the kgCounter by the amount of kg in what was just pushed
        if (kgCounter <= 560) {
            processGems();//see function for description of steps
        } else {
            itsBoutFull();//see function for description of steps
            processGems();//see function for description of steps
        }

        //===========Scenario 3: The requested gem is in stock, but the current container cannot handle the next order==================================================

    } else {//If the container is over 560kg, the next order could overflow it so...:
        itsBoutFull();//see function for description of steps
        processGems();//see function for description of steps
    }
}
/*
Process the gems in any order you like until there none
left in the gem mine.
*/
//=============Order #1=====================
console.log("The High Cleric of Garl Glittergold requests the stores of Onyx for to wage campaign against Necromancers in the South");
placeOrder("Onyx");
//=============Order #2=====================
console.log("The Junior Cleric of Garl Glittergold requests the stores of Emeralds for to pay the ransom for safe return of the High Cleric");
placeOrder("Emerald");
//=============Order #3=====================
console.log("The Constable requests the stores of Amethyst to put up as reward for the capture of the imposters of the High and Junior Clerics");
placeOrder("Amethyst");
//=============Order #4=====================
console.log("The King requests the stores of Bloodstone as reward for the head of the inept Skope Manager, who has been sacked");
placeOrder("Bloodstone");
//=============Order #5(What happens when the gem is out of stock)=====================
console.log("Some new guy wants Onyx...")
placeOrder("Onyx");

//if the GemMine is empty, the message will be outside the skope by changing mineralsStocked to false
//push the current container to the heapSkopeContainers, cause' this mine is tapped
if (mineralsStocked === false) { heapSkopeContainers.push(currentContainer) };

console.log(heapSkopeContainers);//Show the collection of containers



