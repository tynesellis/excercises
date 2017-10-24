const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
planets.forEach(function(planet){
    planetEl.innerHTML += `${planet} `
})

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetsCap = planets.map(function(planet){
   return (planet.charAt(0).toUpperCase() + planet.slice(1));
})
console.log(planetsCap)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const planetsConE = planets.filter(function(planet){
    const containsE = planet.includes("e");
    return containsE;
})
console.log(planetsConE)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentenceReduction = words.reduce(function (current, next){
    if (next.includes("but")){
        return current + " " + next + ","
    } else if (next.includes("cheese")) {
        return current + " " + next + "." 
    }
    else {return current + " " + next}
})
console.log(sentenceReduction)