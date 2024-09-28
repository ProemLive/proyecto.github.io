import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica de autenticación
        console.log('Usuario autenticado:', { email, password });
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <label>Contraseña:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;


NavBar.js

import React, { useState } from 'react';

function NavBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <nav>
            <input 
                type="text" 
                placeholder="Buscar productos..." 
                value={searchTerm} 
                onChange={handleSearch} 
            />
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Mi Cuenta</li>
            </ul>
        </nav>
    );
}

export default NavBar;

ProductList.js

import React from 'react';
import ProductItem from './ProductItem';

const products = [
    { id: 1, name: 'Silla de oficina', price: 150, description: 'Cómoda silla giratoria' },
    { id: 2, name: 'Escritorio moderno', price: 200, description: 'Escritorio de madera y metal' },
];

function ProductList() {
    return (
        <div>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;

ProductItem.js

import React from 'react';

function ProductItem({ product }) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    );
}

export default ProductItem;
