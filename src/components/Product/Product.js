import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product;


    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <h4>{price}</h4>
                <h5 className='stock-text'>only {stock} in stock- order soon</h5>
                <p><small>by: {seller}</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>


        </div>
    );
};

export default product;