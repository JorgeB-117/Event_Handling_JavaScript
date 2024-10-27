//Task 2: Add Event Listener for Product Selection
const productSelector = document.getElementById('product-selector'); // Product dropdown (so user can selecg)
const quantityInput = document.getElementById('quantity'); // Quantity field
const totalPriceElement = document.getElementById('total-price'); // Total price 
const placeOrderButton = document.getElementById('place-order');  //  purchase button 
const orderSummary = document.getElementById('order-summary');  //  order summary

productSelector.addEventListener('change', updateTotalPrice); // update price according to product
quantityInput.addEventListener('input', updateTotalPrice); // update price according to quantity

//Task 3: Calculate Total Price Dynamically 

// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity; // Calculate total price
    
    totalPriceElement.textContent = `${totalPrice}`
};

// this is the alert for invalid order.
function orderAlert() {
    const quantity = parseInt(quantityInput.value);
    if (quantity < 1) {
        alert(' Enter a valid quantity please!!.');
        return false;
    }
    return true;
};

//Task 4: Handle Order Submission

placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent; // Get the current total price

    orderSummary.textContent = `Congratulations on your order! You ordered ${quantity} of ${selectedProduct} for a total of $${totalPrice}`
alert (`Thank you for your purchase!`)
});
