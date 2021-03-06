import React from 'react'

export default function Product(props) {
    const { product, onAdd } = props;

    return (
        <a>
            <a className="itemsClothing">
                <img className="catPics" src={product.image} alt={product.name}/>
            </a>
            <a className="buttonPlace">
            <button className="buttonsImage" onClick={() => onAdd(product)} data-hover={product.price} ><div>{product.name}</div></button>  
            </a>                       
        </a>
        
    )
}
// console.log("hallo")
