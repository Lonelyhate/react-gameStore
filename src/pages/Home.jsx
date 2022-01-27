import React from 'react';
import axios from 'axios';
import { GameItem } from '../components/GameItem/GameItem';
import './Home.scss';

const Home = () => {
    const [games, setGames] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://61f1d03d072f86001749f3b6.mockapi.io/Games').then(({ data }) => {
            setGames(data);
        });
    }, []);

    return (
        <div className="home">
            {games.map((game) => (
                <GameItem
                    key={game.id}
                    title={game.title}
                    genres={game.genres}
                    image={game.image}
                    price={game.price}
                    game={game}
                    id={game.id}
                />
            ))}
        </div>
    );
};

export default Home;
