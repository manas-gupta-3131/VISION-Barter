const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let products = [];

app.post('/add-product', (req, res) => {
    const { productName, productDescription, productPrice } = req.body;
    products.push({
        name: productName,
        description: productDescription,
        price: parseFloat(productPrice),
    });
    res.redirect('/');
});

app.get('/get-products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
