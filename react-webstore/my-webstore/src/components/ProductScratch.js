import React from 'react'

export default function ProductScratch(props) {
    const { product } = props;
// console.log(product)
    return (
        <a>
            <a className="itemsClothing">
                <img className="catPics" src={product.image} alt={product.name}/>
            </a>
            <a className="buttonPlace">
            <button className="buttonsImage" data-hover={product.price} ><div>{product.name}</div></button>  
            </a>                       
        </a>
        
    )
}
// console.log("hallo")
