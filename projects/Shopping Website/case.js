const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const quantityDisplay = document.getElementById("quantity-display");
const priceDisplay = document.getElementById("price-display");
const withinMetroManila = document.getElementById("withinMM");
const outsideMetroManila = document.getElementById("outsideMM");
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

function shippingWithinMetroManila() {
    priceDisplay.innerHTML = `$${totalPrice += 5}`;
};

function shippingOutsideMetroManila() {
    priceDisplay.innerHTML = `$${totalPrice += 10}`;
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////

plus.addEventListener("click", addQuantity);
minus.addEventListener("click", subtractQuantity);
withinMetroManila.addEventListener("click", shippingWithinMetroManila);
outsideMetroManila.addEventListener("click", shippingOutsideMetroManila);