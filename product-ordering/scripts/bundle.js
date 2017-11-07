(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const nav = require('./navBar');
const productsContr = require('./productsController');
const reviewsContr = require('./reviewsController');

reviewsContr.addComments();
},{"./navBar":2,"./productsController":3,"./reviewsController":5}],2:[function(require,module,exports){
const createNav = {
    "updateNav": document.getElementById('navBar').innerHTML = `
    <ul>
        <li><a href="#">Betsy</a></li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
    </ul >
`
}
module.exports = createNav;

},{}],3:[function(require,module,exports){
const products = require("./productsFactory");

const writeProducts = {
    "writeIt": products.products().forEach(product => {
        document.getElementById('products').innerHTML += `
        <section id=product_${product.id}>
        <img height="200" width="auto" src=${product.img}>    
        <h1>Product: ${product.title}</h1>
        <p>Decription: ${product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        <h5>Reviews:</h5>
        </section>
        `
    })
}

module.exports = writeProducts;
},{"./productsFactory":4}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
const comments = require("./reviewsFactory");

const writeTrollStuff = {

    "addComments": function () {
        comments.comments().forEach(comment => {
            let commentEl = document.querySelector(comment.id);
            let newP = document.createElement("p")
            newP.innerHTML = comment.comments;
            commentEl.appendChild(newP)
        })
    }

}

module.exports = writeTrollStuff;

},{"./reviewsFactory":6}],6:[function(require,module,exports){
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
},{}]},{},[1]);
