import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer';
import './GameButton.scss';

export const GameButton = ({ children, type, size = 's', game, isItems }) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        if(isItems) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game));
        }
    };


    return (
        <button
            onClick={handleClick}
            className={classNames({
                btn: true,
                'btn--secondary': type === 'secondary',
                'btn--primary': type === 'primary',
                'btn--small': size === 's',
                'btn--mdium': size === 'm',
            })}>
            {children}
        </button>
    );
};
