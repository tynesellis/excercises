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
        productsDB.push(createProduct("Block Plane", "Planes end wood.", "$35", 1, "https://i.ebayimg.com/images/m/mCYMBpafbReAvyJDsjfaDFw/s-l1600.jpg"));
        productsDB.push(createProduct("Chisels", "Set: 3/4, 1/2, and mortising chisels", "$35", "1 Set of 3", "https://www.qy1.de/img/mukoumachinomi309540.jpg"));
        
        return productsDB;
    }

}


module.exports = productsFactory;