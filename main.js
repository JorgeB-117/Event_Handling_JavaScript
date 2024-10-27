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

