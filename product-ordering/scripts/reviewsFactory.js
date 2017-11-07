const trolls = {
    "comments": function() {
        const trollDB = [];
        const createComment = function (id, comments) {
            return Object.create(null, {
                "id": {
                    value: id,
                    enumerable: true
                },
                "comments": {
                    value: comments,
                    enumerable: true
                }
            })
        }
        trollDB.push(createComment("#product_1", "This didn't make my internet run any faster.  I guess doing things the odl fashon way isn't as cracked up as they sold me on for with in."));
        trollDB.push(createComment("#product_1", "Love it.  Works gr8!"));
        trollDB.push(createComment("#product_2", "Love and block planes cover a multitude of sins"));
        trollDB.push(createComment("#product_2", "I used this for a hedache and it made it WORSE!!!  DO NOT BUY"));
        trollDB.push(createComment("#product_3", "Good for mortise and tennon work"));
        trollDB.push(createComment("#product_3", "Mine are now evidence.  Worked great."));
        
        return trollDB;
    }
}

module.exports = trolls;