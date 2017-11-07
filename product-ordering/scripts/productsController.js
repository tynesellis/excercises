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
        </section>
        `
    })
}

module.exports = writeProducts;