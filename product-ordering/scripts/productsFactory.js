const productsFactory = {
    "products": function () {
        const idGen = function* () {
            let uniqueId = 1
            while (true) {
                yield uniqueId
                uniqueId += 1
            }
        }
        const productID = idGen();
        const productsDB = [];
        const createProduct = function (title, description, price, quantity, img) {
            return Object.create(null, {
                "id": {
                    value: productID.next().value,
                    enumerable: true
                },
                "title": {
                    value: title,
                    enumerable: true
                },
                "description": {
                    value: description,
                    enumerable: true
                },
                "price": {
                    value: price,
                    enumerable: true
                },
                "quantity": {
                    value: quantity,
                    enumerable: true
                },
                "img": {
                    value: img,
                    enumerable: true
                }
            })
        }
        productsDB.push(createProduct("Draw Shave", "Double handled draw shave for shaping wood.", "$25", 1, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ZiehmesserTop.jpeg/700px-ZiehmesserTop.jpeg"));

        return productsDB;
    }

}


module.exports = productsFactory;