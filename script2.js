let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;

    displayCart();
    updateTotal();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartList.appendChild(li);
    });
}

function updateTotal() {
    document.getElementById("total").textContent = total;
}