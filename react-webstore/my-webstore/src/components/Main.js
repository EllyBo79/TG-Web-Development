import React from 'react'
import Product from './Product';

export default function Main(props) {
    const {products} = props;
    return (
    <main >
        <h2>Products</h2>
        <div>
        {products.map((product) => (
            <Product key={product.id} product={product}></Product>
        ))}
        </div>
    </main>
    )
    
}