//API vs JSON
//API is an http interface that allows different software applications to communicate with each other.
//json is a data format that is used to exchange data between different software applications.
//In other words, API is a way to access data, 
// while JSON is a way to format that data.
//Example: When you make a request to an API,
//  the response is often in JSON format.
//That is, the API sends data in a structured format
//  that can be easily parsed and used by the application.

const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {

    //res.json is a method in Express.js that sends a JSON response.
    //It is used to send a JSON response to the client.
    //It is a shorthand for res.setHeader('Content-Type', 'application/json') and
    // res.send(JSON.stringify(data)).
    //It is used to send a JSON response to the client.
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    //API is an http interface that allows different software applications to communicate with each other.
    res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    //console.log(req.params);

    const { productID } = req.params;

    const singleProduct = products.find((product) => {
        return product.id === Number(productID);
    })

    if (!singleProduct) {
        return res.status(404).send('Product does not exist');
    }

    //API is an http interface that allows different software applications to communicate with each other.
    res.json(singleProduct);
});


app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    //req.query is an object that contains the query string parameters 
    // of the request. 
    //It is used to access the query string parameters of the request.
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        }
        );
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // return res.status(200).send(`No products matched your search term: ${search}`);
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(products);
    //.send vs .json
    //res.send is a method in Express.js that sends a response to the client.
    //It can send a string, an object, or an array.
    //res.json is a method in Express.js that sends a JSON response.
    //It is used to send a JSON response to the client.
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})

//In short:
// app.get defines a route to handle GET requests.
// Route: '/api/products'.
// Triggered when user visits /api/products.
// Sends a JSON response with product data.
// res.status(200) sets HTTP status to OK.
// res.json(products) sends product data.
// Product data is an array of objects.
// Data is imported from data.js.
// Used to display products on the Products page.
// Page styled with HTML & CSS.
// Accessed via 'Products' link in navbar.
// Rendered using products.html in navbar-app folder.
