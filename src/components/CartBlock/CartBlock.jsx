import React from 'react';
import './CartBlock.scss';
import { BiCartAlt } from 'react-icons/bi';

const CartBlock = () => {
    return (
        <div className="cart">
            <BiCartAlt size={25} className='cart__icon'/>
            <span className='cart__total-price'>2333 руб.</span>
        </div>
    );
};

export default CartBlock;
