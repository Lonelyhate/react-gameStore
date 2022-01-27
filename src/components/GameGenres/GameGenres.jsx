import React from 'react';
import './GameGenres.scss';

const GameGenres = ({ genres }) => {
    return (
        <ul className="game-item__genres">
            {genres.map((genre) => (
                <li className="game-item__gengre" key={genre}>
                    {genre}
                </li>
            ))}
        </ul>
    );
};

export default GameGenres;
