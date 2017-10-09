const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    "A": 0,
    "B": 0,
    "C": 0,
    "D": 0,
    "F": 0
} 


let benchmark = 90;//beginning value to compare with scores
//for each grade category in grades object, loops through scores array and adds to each key value of grades
for (let value in grades){
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] > benchmark && scores[i] <= (benchmark + 10) ) {
            grades[value] ++;
        }  
    } benchmark -= 10;
}


console.log(grades)

for (let key in grades) {
    console.log(key + "'s : " + grades[key])
}//Display grades by letter with corresponding number

//Lowest score - loops through scores array and stores lowest score until a lower score is found or the loop completes
let lowestScore = 101;
for (var index = 0; index < scores.length; index++) {
    if (scores[index] < lowestScore) {
        lowestScore = scores[index];
    }   
}

console.log("Lowest score was: " + lowestScore);

//Highest score - same as above, but with highest score
let highestScore = 0;
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


//Finds the value of the grade key with the highest number of scores
for (let value in grades) {
    if (grades[value] > currentGradeCount) {
        currentGradeCount = grades[value];
    } 
}

//pushes the letter grade category with the highest number into array, as there might be a tie
for (let value in grades) {
    if (grades[value] === currentGradeCount) {
        highestGradeCategory.push(value);
    }
}
//scenarios for one grade category having the highest or a tie
if (highestGradeCategory.length === 1) {
    mostCommonGrade += highestGradeCategory[0] + "."
} else {
    mostCommonGrade += "a tie between: " + highestGradeCategory.slice(0, (highestGradeCategory.length - 1)).join(", ") + " and " + highestGradeCategory.slice(highestGradeCategory.length - 1) + ".  Each grade category had " + currentGradeCount + " scores.";
}

console.log(mostCommonGrade)


