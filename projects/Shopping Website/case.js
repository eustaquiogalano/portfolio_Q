const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const quantityDisplay = document.getElementById("quantity-display");
const priceDisplay = document.getElementById("price-display");
const withinMM = document.getElementById("withinMM");
const outsideMM = document.getElementById("outsideMM");
let itemQuantity = 0;
const itemPrice = 50;
let totalPrice;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function addQuantity() {
    itemQuantity++;
    quantityDisplay.innerHTML = `${itemQuantity}`;
    totalPrice = itemPrice * itemQuantity;
    priceDisplay.innerHTML = `$${totalPrice}`;
};

function subtractQuantity() {

    if (!(itemQuantity === 0)) {
        itemQuantity--;
        quantityDisplay.innerHTML = `${itemQuantity}`;
        totalPrice = itemPrice * itemQuantity;
        priceDisplay.innerHTML = `$${totalPrice}`;    
    }
};

function shippingWithinMM() {
    priceDisplay.innerHTML = `$${totalPrice += 5}`;
};

function shippingOutsideMM() {
    priceDisplay.innerHTML = `$${totalPrice += 10}`;
};




///////////////////////////////////////////////////////////////////////////////////////////////////////////

plus.addEventListener("click", addQuantity);
minus.addEventListener("click", subtractQuantity);
withinMM.addEventListener("click", shippingWithinMM);
outsideMM.addEventListener("click", shippingOutsideMM);