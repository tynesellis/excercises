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
        return trollDB;
    }
}

module.exports = trolls;