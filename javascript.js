JavaScript const products = [
    {
        id: 1,
        name: "Conjunto Ejecutivo Trot Cherry/Negro",
        price: 17664,
        image: "https://todooficina.com/wp-content/uploads/2020/10/p-6455-conjuto-ejecutivo-trot-cherrynegro-89d-300x300.jpg",
        description: "Conjunto Ejecutivo Trot, brinda un imagen elegante ideal para áreas ejecutivas y directivas de trabajo a un precio económico."
    },
    {
        id: 2,
        name: "Conjunto Operativo Trot Pera/Negro",
        price: 8200,
        image: "https://todooficina.com/wp-content/uploads/2020/10/p-5365-5513-300x300.jpg",
        description: "Conjunto Operativo Trot, ideal para áreas operativas y de trabajo a un precio económico."
    },
    {
        id: 3,
        name: "Conjunto Semi-Ejecutivo Trot Cherry/Negro",
        price: 12500,
        image: "https://todooficina.com/wp-content/uploads/2020/10/p-6565-5515_cherry_800x800-300x300.jpg",
        description: "Conjunto Semi-Ejecutivo Trot, ideal para áreas ejecutivas y de trabajo a un precio económico."
    },
    {
        id: 4,
        name: "Módulo Elite Ejecutivo Bari Izquierdo Wenge",
        price: 20000,
        image: "https://todooficina.com/wp-content/uploads/2020/10/204-300x300.png",
        description: "Modulo Elite Secretarial Milan izquierdo, práctico y funcional con cajonera."
    },
    {
        id: 5,
        name: "Mesa Trapezoidal 239 Melamina Cenizo",
        price: 3500,
        image: "https://todooficina.com/wp-content/uploads/2021/09/258-MI10-300x300.png",
        description: "Mesa Trapezoidal para configuraciones geométricas diversas."
    },
    {
        id: 6,
        name: "Mesa de Trabajo 645 Multiusos 1.40 cm Cenizo",
        price: 4899,
        image: "https://todooficina.com/wp-content/uploads/2020/10/5262-MI12-300x300.png",
        description: "Mesa de trabajo multiusos de fácil armado, ideal para cualquier entorno."
    },
    {
        id: 7,
        name: "Escritorio Seven SV750 Ebano boreal",
        price: 5600,
        image: "https://todooficina.com/wp-content/uploads/2020/10/SV750-perspectiva-m-ebano-e-negra.jpg",
        description: "El escritorio Seven brinda modernidad y elegancia a tu oficina, gracias a su diseño minimalista."
    },
    {
        id: 8,
        name: "Módulo L Seven SV751 Ebano boreal",
        price: 7889,
        image: "https://todooficina.com/wp-content/uploads/2020/10/SV751-perspectiva-m-ebano-e-negra.jpg",
        description: "El módulo L Seven brinda modernidad y elegancia a tu oficina, gracias a su diseño minimalista."
    },
    {
        id: 9,
        name: "Escritorio 2 Pedestales 1.82 Nova Metálico Arena",
        price: 11899,
        image: "https://todooficina.com/wp-content/uploads/2020/10/p-4948-5565-mn2_800x800-300x300.jpg",
        description: "NOVA, línea operativa por excelencia elaborada con materiales robustos de alta resistencia y durabilidad."
    },
    {
        id: 10,
        name: "Librero de Piso con 1 Entrepaño Metálico Negro",
        price: 4200,
        image: "https://todooficina.com/wp-content/uploads/2020/10/6102-HM01-300x300.jpg",
        description: "Libreros marca Hon construidos para brindar una solución duradera y adaptable a cualquier demanda de almacenamiento."
    },
    {
        id: 11,
        name: "Librero de Piso con 3 Entrepaños Metálico Arena",
        price: 12682,
        image: "https://todooficina.com/wp-content/uploads/2020/10/p-4238-s60abcl_whlsl_olem_1_800x800-300x300.jpg",
        description: "Libreros marca Hon construidos para brindar una solución duradera y adaptable a cualquier demanda de almacenamiento."
    },
    {
        id: 12,
        name: "Librero Combinado Elite 1.87 Wenge",
        price: 11548,
        image: "https://todooficina.com/wp-content/uploads/2020/10/6098-ME03_3-300x300.jpg",
        description: "Los libreros Elite agregan una moderna elegancia a su área de trabajo, permitiéndole colocar de una forma ordenada los detalles de su oficina."
    },
    {
        id: 13,
        name: "Credenza con Cajón Urban 603 Ceniza",
        price: 6700,
        image: "https://todooficina.com/wp-content/uploads/2020/10/887-MI10.png",
        description: "Brinda un toque cálido al entorno asegurando un ambiente único, se adapta fácilmente."
    },
    {
        id: 14,
        name: "Credenza con Cajón Urban 603 Ebano boreal",
        price: 6948,
        image: "https://todooficina.com/wp-content/uploads/2020/10/603.1905-300x300.jpg",
        description: "Brinda un toque cálido al entorno asegurando un ambiente único, se adapta fácilmente."
    },
    {
        id: 15,
        name: "Credenza Ejecutiva KLASS03 Blanco",
        price: 14200,
        image: "https://todooficina.com/wp-content/uploads/2020/10/5021-MI06-300x300.png",
        description: "Ofrece soluciones innovadoras para la creación de entornos de trabajo flexibles, funcionales y adaptables."
    },
    {
        id: 16,
        name: "Mesa de Juntas Enzzo 21814 (14 Personas) Blanco",
        price: 43172,
        image: "https://todooficina.com/wp-content/uploads/2020/10/p-4742-5071-mn06_1_800x800-300x300.jpg",
        description: "Mesa de juntas funcional y adaptable para 14 personas."
    },
    {
        id: 17,
        name: "Mesa de Juntas Enzzo 21810 (10 Personas) Cenizo",
        price: 31080.57,
        image: "https://todooficina.com/wp-content/uploads/2020/10/5070-MI12-300x300.jpg",
        description: "Mesa de juntas funcional y adaptable para 10 personas."
    },
    {
        id: 18,
        name: "Mesa de Juntas Filo Rectangular",
        price: 25687,
        image: "https://todooficina.com/wp-content/uploads/2020/10/p-6595-5794_copy-300x300.jpg",
        description: "Diseño de trazos suaves, versatilidad en configuraciones, creando espacios elegantes."
    },
    {
        id: 19,
        name: "Mampara con Policarbonato Privatt (marco aluminio) P12090",
        price: 3223,
        image: "https://todooficina.com/wp-content/uploads/2021/12/655-TL10.jpeg",
        description: "Mampara Privatt de fácil ensamble que no requiere herramientas, ideal para privacidad en espacios de trabajo."
    },
    {
        id: 20,
        name: "Mini Mampara Principal Color Tabaco",
        price: 1704,
        image: "https://todooficina.com/wp-content/uploads/2020/10/p-5204-5086-mi08.jpg",
        description: "Mini mampara para división discreta entre escritorios, disponible en varios colores."
    },
    {
        id: 21,
        name: "Mampara Privatt con Marco de Aluminio",
        price: 9825,
        image: "https://todooficina.com/wp-content/uploads/2020/10/5058-300x300.jpg",
        description: "Mampara de fácil ensamble, ideal para crear espacios laborales prácticos y adaptables."
    }
];
// Carrito de compras (definido en el ámbito global)
let cart = [];

// Función para inicializar el catálogo
function initializeCatalog() {
    const catalog = document.getElementById('product-catalog');
    products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
            <button onclick="buyNow(${product.id})">Pagar Ahora</button>
        `;
        catalog.appendChild(productDiv);
    });
}

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
