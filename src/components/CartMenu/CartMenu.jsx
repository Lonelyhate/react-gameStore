import React from 'react';
import './CartMenu.scss';
import { GameButton } from '../UI/GameButton';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const CartMenu = () => {
    const dispatch = useDispatch();
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
                    <GameButton type="primary" size="m">
                        Офорить заказ
                    </GameButton>
                </div>
            )}
        </div>
    );
};

export default CartMenu;
