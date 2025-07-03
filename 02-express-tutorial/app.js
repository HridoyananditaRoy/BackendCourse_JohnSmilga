//API vs JSON
//API is an http interface that allows different software applications to communicate with each other.
//JSON is a data format that is used to exchange data between different software applications.
//In other words, API is a way to access data, while JSON is a way to format that data.
//Example: When you make a request to an API, the response is often in JSON format.
//That is, the API sends data in a structured format that can be easily parsed and used by the application.
//In our project app.get('/api/products', (req, res) => {
//   res.status(200).json(products);

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