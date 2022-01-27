import React from 'react';
import './CartMenu.scss';
import { GameButton } from '../UI/GameButton';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const CartMenu = ( {setIsCartVisable} ) => {
    const { itemsInCart, itemsSum } = useSelector(({ cart }) => cart);

    return (
        <div className="cart-menu">
            <div className="cart-menu__list">
                {itemsInCart.length > 0
                    ? itemsInCart.map((game) => (
                          <CartItem
                              key={game.id}
                              title={game.title}
                              price={game.price}
                              id={game.id}
                          />
                      ))
                    : 'Корзина пуста'}
            </div>
            {itemsInCart.length > 0 && (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Итого:</span>
                        <span>{itemsSum} руб.</span>
                    </div>
                    <Link to="/app/order">
                        <span onClick={() => setIsCartVisable(false)} className='cart-menu__order-btn'>Оформить заказ</span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartMenu;
