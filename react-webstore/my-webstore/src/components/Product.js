import React from 'react'

export default function Product(props) {
    const { product } = props;

    return (
        <div className="itemsClothing">
            <div className="clothes">
                <img className="catPics" src={product.image} alt={product.name}/> 
                <button data-hover={product.price} className="buttonOne"><div>{product.name}</div></button>                         
                {/* <h3>{product.name}</h3> */}
                {/* <div>${product.price}</div> */}
            </div>
         </div>
    )
}
// console.log("hallo")
