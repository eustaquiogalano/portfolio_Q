const inputPCS = document.getElementById('inputpcs');
const orderUpdate = document.getElementById('order-update');
const buttonO3 = document.getElementById('o3');
const buttonO2 = document.getElementById('o2');
const buttonO1 = document.getElementById('o1'); 



buttonO3.addEventListener("click", () => {
    const pcs = inputPCS.value;
    orderUpdate.innerHTML = `${pcs}pcs<br> Total: $${pcs * 2 + 2}`;
    inputPCS.value = null;
})

buttonO2.addEventListener("click", () => {
    
    orderUpdate.innerHTML = `6pcs<br> Total: $${6 * 2 + 2}`;
})

buttonO1.addEventListener("click", () => {
    
    orderUpdate.innerHTML = `10pcs<br> Total: $${10 * 2 + 2}`;
})
