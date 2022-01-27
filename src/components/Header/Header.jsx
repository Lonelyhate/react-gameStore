import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import CartBlock from '../CartBlock/CartBlock';

const Header = () => {
    
    return (
        <header className="header">
            <div className="header__wrapper wrapper">
                <Link className='header__logo' to='/'>Game Store</Link>
                <div className='header__cart'>
                    <CartBlock/>
                </div>
            </div>
        </header>
    );
};

export default Header;
