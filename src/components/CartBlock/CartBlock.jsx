import React from 'react';
import './CartBlock.scss';
import { BiCaptions, BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import CartMenu from '../CartMenu/CartMenu';

const CartBlock = () => {
    const [isCartVisable, setIsCartVisable] = React.useState(false);
    const { itemsSum, itemsInCart } = useSelector(({ cart }) => cart);


    const handleClick = () => {

    }

    return (
        <div className="cart">
            <BiCartAlt
                onClick={() => setIsCartVisable(!isCartVisable)}
                size={25}
                className="cart__icon"
            />
            <span className='cart__count'>{itemsInCart.length}</span>
            <span className="cart__total-price">{itemsSum} руб.</span>
            {isCartVisable && <CartMenu setIsCartVisable={setIsCartVisable}/>}
        </div>
    );
};

export default CartBlock;
