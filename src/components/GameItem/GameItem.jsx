import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentGame } from '../../redux/games/reduser';
import GameGenres from '../GameGenres/GameGenres';
import { GameButton } from '../UI/GameButton';
import './GameItem.scss';

export const GameItem = ({ game }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => (item.id === game.id));

    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.title}`)
    }

    return (
        <div className="game-item">
            <div className="game-item__image" onClick={handleClick}>
                <img src={game.image} alt={game.title} />
            </div>
            <div className="game-item__details">
                <h3 className="game-item__title" onClick={handleClick}>{game.title}</h3>
                <GameGenres genres={game.genres}/>
                <div className="game-item__bottom">
                    <span className="game-item__price">{game.price} руб.</span>
                    <GameButton isItems={isItemInCart} type={!isItemInCart ? 'primary' : 'secondary'} game={game}>
                        {!isItemInCart ? 'Добавить в корзину' : 'Убрать из корзины'}
                    </GameButton>
                </div>
            </div>
        </div>
    );
};
