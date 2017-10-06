//Coins to cash

const piggyBank = {
    "quarters": 4,
    "nickles": 1,
    "dimes": 1,
    "pennies": 100
}

let demDolla$ = 0;

for (let key in piggyBank) {
    let coinValue = 0;
    if (key === "quarters") {
        coinValue = .25;
    }  else if (key === "nickles") {
        coinValue = .05;
    } else if (key === "dimes") {
        coinValue = .1;
    } else if (key === "pennies") {
        coinValue = .01;
    }
    demDolla$ += (coinValue * piggyBank[key]);
    
    
}
