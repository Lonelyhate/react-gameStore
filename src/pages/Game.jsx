import React from 'react';
import { useSelector } from 'react-redux';
import GameGenres from '../components/GameGenres/GameGenres';
import { GameButton } from '../components/UI/GameButton';
import './Game.scss';

const Game = () => {
    const { currentGame } = useSelector(({ game }) => game);
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => (item.id === currentGame.id));


    if(!currentGame) return null

    return (
        <div className="game-page">
            <h1>{currentGame.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe
                        width="90%"
                        height={400}
                        src={currentGame.video}
                        title="Youtube Video Player"
                        frameBorder={0}></iframe>
                </div>
                <div className="game-page__right">
                    <img src={currentGame.image} alt=''/>
                    <p className="game-page__descr">{currentGame.description}</p>
                    <p className="secondary-text">Популярные метки: </p>
                    <GameGenres genres={currentGame.genres} key={currentGame.id}/>
                    <div className='game-page__buy-game'>
                    <GameButton isItems={isItemInCart} type={!isItemInCart ? 'primary' : 'secondary'} game={currentGame}>
                        {!isItemInCart ? 'Добавить в корзину' : 'Убрать из корзины'}
                    </GameButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
