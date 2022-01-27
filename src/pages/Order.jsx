import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../components/OrderItem/OrderItem';
import './Order.scss';

const Order = () => {
    const {itemsInCart, itemsSum} = useSelector(({ cart }) => cart);

    return (
        <div className="order-page">
            <div className="order-page__left">
                {itemsInCart.map((game) => (
                    <OrderItem game={game} />
                ))}
            </div>
            <div className="order-page__right">
                <div className="order-gape__total-price">
                    <span>Товаров на сумму {itemsSum} руб.</span>
                </div>
            </div>
        </div>
    );
};

export default Order;
