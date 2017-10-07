const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "f": 0
} 

for (let i = 0; i < scores.length; i++) {
    let benchmark = 90;//beginning value to compare with scores
    let letters = ["a", "b", "c", "d", "f"] //for use in assigning values to keys in grades object - see if statement in next for loop
    for (var l = 0; l < letters.length; l++) {
        if (scores[i] > benchmark) {
            grades[letters[l]] ++;
            benchmark -= 10;
            break
        } else {benchmark -= 10;}
    }//end for loop to compare scores to grades and assign to proper grades object key
}

console.log(grades)

for (let key in grades) {
    console.log(key.toUpperCase() + "'s : " + grades[key])
}//Display grades by letter with corresponding number

//Lowest score
var lowestScore = 101;
for (var index = 0; index < scores.length; index++) {
    if (scores[index] < lowestScore) {
        lowestScore = scores[index];
    }   
}

console.log("Lowest score was: " + lowestScore);

//Highest score
var highestScore = 0;
for (var index = 0; index < scores.length; index++) {
    if (scores[index] > highestScore) {
        highestScore = scores[index];
    }   
}

console.log("Highest score was: " + highestScore);

//Grade most achieved
let mostCommonGrade = "The most common grade was ";
let currentGradeCount = 0;
let highestGradeCategory = [];


//Finds the grade with the highest number of scores
for (let value in grades) {
    if (grades[value] > currentGradeCount) {
        currentGradeCount = grades[value];
    } 
}


for (let value in grades) {
    if (grades[value] === currentGradeCount) {
        highestGradeCategory.push(value.toUpperCase());
    }
}

if (highestGradeCategory.length === 1) {
    mostCommonGrade += highestGradeCategory[0] + "."
} else {
    mostCommonGrade += "a tie between: " + highestGradeCategory.slice(0, (highestGradeCategory.length - 1)).join(", ") + " and " + highestGradeCategory.slice(highestGradeCategory.length - 1) + ".  Each grade category had " + currentGradeCount + " scores.";
}




console.log(mostCommonGrade)


