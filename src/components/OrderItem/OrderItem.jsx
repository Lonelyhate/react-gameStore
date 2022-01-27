import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer'

const OrderItem = ({game}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className="order-item">
            <div className='order-item__cover'>
                <img src={game.image}/>
            </div>
            <h2 className='order-item__title'>{game.title}</h2>
            <div className="order-item__price">
                <span>{game.price} руб.</span>
                <button onClick={handleClick} >Удалить товар</button>
            </div>
        </div>
    );
};

export default OrderItem;
