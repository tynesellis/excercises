//Cash to coins

const piggyBank = {
     
}

function correctChange(cash) {
    let remainder = 0;
    piggyBank["quarters"] = Math.floor(cash / .25);
    remainder = (cash % .25).toFixed(2);
    piggyBank["dimes"] = Math.floor(remainder / .1);
    remainder = (remainder % .1).toFixed(2);
    piggyBank["nickels"] = Math.floor(remainder / .05);
    remainder = (remainder % .05).toFixed(2);
    piggyBank["pennies"] = Math.floor(remainder / .01);
}

//enter your cash amount here
correctChange(5.73)

console.log(piggyBank);

