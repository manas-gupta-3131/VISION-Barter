document.addEventListener("DOMContentLoaded", function() {
    const sellForm = document.getElementById("sell-form");

    sellForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const productName = document.getElementById("product-name").value;
        const productDescription = document.getElementById("product-description").value;
        const productPrice = document.getElementById("product-price").value;
        
        addProductToDatabase(productName, productDescription, productPrice);
        clearFormFields();
        fetchProducts();
    });

    function addProductToDatabase(name, description, price) {
        fetch('/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `productName=${name}&productDescription=${description}&productPrice=${price}`
        });
    }

    function clearFormFields() {
        document.getElementById("product-name").value = "";
        document.getElementById("product-description").value = "";
        document.getElementById("product-price").value = "";
    }

    function fetchProducts() {
        fetch('/get-products')
            .then(response => response.json())
            .then(products => {
                // Update the products listing on the main page
                console.log(products); // You can update your UI here
            });
    }

    fetchProducts(); // Fetch products when the page loads
});
