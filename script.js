// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex > -1) {
        // Incrementar la cantidad si el producto ya está en el carrito
        cart[existingProductIndex].quantity += 1;
    } else {
        // Agregar nuevo producto al carrito
        cart.push({...product, quantity: 1});
    }

    updateCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Función para modificar la cantidad de un producto en el carrito
function updateQuantity(productId, quantity) {
    const product = cart.find(item => item.id === productId);

    if (product) {
        product.quantity = parseInt(quantity, 10);
        if (product.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// Función para actualizar el carrito
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Función para el proceso de pago
function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    alert('Gracias por su compra! Procediendo al pago...');
    cart = [];
    updateCart();
}

// Función para comprar inmediatamente
function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    alert(Gracias por comprar ${product.name}. Procediendo al pago...);
    checkout();
}

// Inicializar catálogo al cargar la página
initializeCatalog();
