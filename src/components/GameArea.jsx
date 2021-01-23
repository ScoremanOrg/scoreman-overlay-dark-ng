import React from 'react';

export const GameArea = ({children, ...rest}) => {
    return <div className="game-area" {...rest}>
        {children}
    </div>
}