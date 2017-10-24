const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort(function(a, b){//sort all numbers from greatest to least
    return b - a;
}).filter(numToCheck => {//return only numbers less than 20
    const isNotTooHigh = (numToCheck < 20);
    return isNotTooHigh
}).map(function(element){
   return (element * 1.5) - 1;  //multiply by 1.5 and then add 1
}).reduce((current, next) => current + next))//get the total of the numbers now in the array


