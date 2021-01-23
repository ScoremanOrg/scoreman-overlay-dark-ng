import React from 'react';
import { Scoreboard } from './Scoreboard';

export const Overlay = ({id, children}) => {
    return <div className={`overlay overlay-${id}`}>
        <Scoreboard>
            {children}
        </Scoreboard>
    </div>
}