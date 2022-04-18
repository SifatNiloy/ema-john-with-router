import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img } = props.product;
    return (
        <div className='product'>
            <div >
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>Name: {name}</h4>
                <h3>Price: {price}</h3>
                <p>Quantity: {quantity}</p>
                <button className='btn-regular'>Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;