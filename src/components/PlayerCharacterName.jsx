import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';

export const PlayerCharacterName = ({ name, children, ...rest }) => {
    function defaultPlayerCharacterNameRender() {
        if (typeof name !== 'undefined') {
            return name;
        }    
    }

    return <div className={`player-character-name`} {...rest}>
        <ChildFnComponent defaultRender={() => defaultPlayerCharacterNameRender()}
            fnArgs={{characterName: defaultPlayerCharacterNameRender()}}>
            {children}
        </ChildFnComponent>
    </div>
}