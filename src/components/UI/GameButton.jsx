import classNames from 'classnames';
import React from 'react';
import './GameButton.scss';

export const GameButton = ({ children, type, size='s', onClick }) => {
    return (
        <button
            onClick={onClick}
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
