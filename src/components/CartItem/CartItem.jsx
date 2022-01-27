import React from 'react';
import './CartItem.scss'

const CartItem = ({id, title, price}) => {
    return (
        <div className="cart-item">
            <h3>{title}</h3>
            <span>{price} руб.</span>
        </div>
    );
};

export default CartItem;
