const coloredReindeer = [];
const coloredReindeerBuilder = function () {
const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];//array of reindeer names
    
    const colorFactory = function* () {//factory that gives a color at a time
        const reindeerColors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"];        
        let counter = 0;
        while (counter < reindeerColors.length) {
        yield currentColor = reindeerColors[counter];
        counter ++;  
        }  
    }
    const colorAssigner = colorFactory();//instance of color factory
    // Write a for loop that looks at each reindeer
    for (let r = 0; r < reindeer.length; r++) {
        let currentReindeer = reindeer[r];
        const generateReindeer = function() {
            return Object.create(null, {
                "name": {enumerable: true, value: currentReindeer},
                "color": {enumerable: true, value: colorAssigner.next().value}
            })
            
        }
        coloredReindeer.push(generateReindeer());//push each object to the array

    }
}
coloredReindeerBuilder()//call the function
console.log(coloredReindeer)
const reindeerString = JSON.stringify(coloredReindeer);
localStorage.setItem("reindeerDB", reindeerString);