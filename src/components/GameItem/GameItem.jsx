import React from 'react';
import { GameButton } from '../UI/GameButton';
import './GameItem.scss';

export const GameItem = ({ title, video, image, price, genres, description }) => {
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
                <div className='game-item__bottom'>
                    <span className='game-item__price'>{price} руб.</span>
                    <GameButton type={'primary'} onClick={() => console.log("кнопка")}>В корзину</GameButton>
                </div>
            </div>
        </div>
    );
};
