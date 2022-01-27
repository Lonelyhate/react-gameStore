import React from 'react';
import { useSelector } from 'react-redux';
import { GameButton } from '../UI/GameButton';
import './GameItem.scss';

export const GameItem = ({ title, image, price, genres, game, id }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => (item.id === id));
    return (
        <div className="game-item">
            <div className="game-item__image">
                <img src={image} alt={title} />
            </div>
            <div className="game-item__details">
                <h3 className="game-item__title">{title}</h3>
                <ul className="game-item__genres">
                    {genres.map((genre) => (
                        <li className="game-item__gengre" key={genre}>
                            {genre}
                        </li>
                    ))}
                </ul>
                <div className="game-item__bottom">
                    <span className="game-item__price">{price} руб.</span>
                    <GameButton isItems={isItemInCart} type={!isItemInCart ? 'primary' : 'secondary'} game={game}>
                        {!isItemInCart ? 'Добавить в корзину' : 'Убрать из корзины'}
                    </GameButton>
                </div>
            </div>
        </div>
    );
};
