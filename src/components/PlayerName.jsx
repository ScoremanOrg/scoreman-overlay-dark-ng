import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';

export const PlayerName = ({ name, children, ...rest }) => {
    function defaultPlayerNameRender() {
        if (typeof name !== 'undefined') {
            return name;
        }    
    }

    return <div className={`player-name`} {...rest}>
        <ChildFnComponent defaultRender={() => defaultPlayerNameRender()}
            fnArgs={{playerName: defaultPlayerNameRender()}}>
            {children}
        </ChildFnComponent>
    </div>
}