import React from 'react'
import ProductScratch from './ProductScratch';

export default function MainScratch(props) {
    const {products2} = props;
    console.log(props)

    return (
    <main >
        {/* <h2>Products</h2> */}
        <div>
        {products2.map((productScratch) => (
            <ProductScratch key={productScratch.id} product={productScratch}></ProductScratch>
        ))}
        </div>
    </main>
    )
    
}