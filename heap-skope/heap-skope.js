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
           
            if (GemMine[requestedMineral].kilograms >= 5) {
                GemMine[requestedMineral].kilograms -= 5;
                console.log(GemMine[requestedMineral].kilograms);
                return {
                    "mineral": requestedMineral,
                    "amount": 5
                }
            } else {
                // let lastBit = GemMine[requestedMineral].kilograms;
                // console.log("lastBit" + lastBit)
                // GemMine[requestedMineral].kilograms -= lastBit;
                // console.log("requested" + GemMine[requestedMineral].kilograms);
                // return {
                //     "mineral": requestedMineral,
                //     "amount": lastBit 
                // }
                console.log("hi")
            }
            
        }//====================================================================================================================
    }
}
const heapSkopeContainers = [];//final collection of containers
/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
const SkopeManager = gemHeapSkope();

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

let kgCount = 0;
while (SkopeManager.process("Amethyst") !== undefined) {
    if (kgCount < 561) {
        currentContainer.orders.push(SkopeManager.process("Amethyst"));
        currentContainer.orders.forEach(function (obj) {
            kgCount += obj.amount;
            console.log(kgCount)
        })
    } else {
        heapSkopeContainers.push(currentContainer);
        currentContainer = gemContainerInstance.next().value;
        currentContainer.orders.push(SkopeManager.process("Amethyst"));
        currentContainer.orders.forEach(function (obj) {
            kgCount += obj.amount;
        });
    }
}

/*
Process the gems in any order you like until there none
left in the gem mine.
*/
// SkopeManager.process("Amethyst")
// SkopeManager.process("Bloodstone")
// (SkopeManager.process("Emerald")


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