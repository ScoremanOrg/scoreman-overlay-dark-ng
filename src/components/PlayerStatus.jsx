import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';

export const PlayerStatus = ({ name: status, children, ...rest }) => {
    function defaultPlayerCharacterNameRender() {
        if (typeof status !== 'undefined') {
            return status.name;
        }    
    }

    return <div className={`player-status`} {...rest}>
        <ChildFnComponent defaultRender={() => defaultPlayerCharacterNameRender()}
            fnArgs={{characterName: defaultPlayerCharacterNameRender()}}>
            {children}
        </ChildFnComponent>
    </div>
}