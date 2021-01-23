import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';
import { PlayerCharacterColor } from './PlayerCharacterColor';
import { PlayerCharacterName } from './PlayerCharacterName';

// TODO: use API to get character
export const PlayerCharacter = ({ character, children, ...rest }) => {
    function defaultPlayerCharacterRender() {
        if (character) {
            return <>
                <PlayerCharacterName name={character.name} />
                <PlayerCharacterColor color={character.color} />
            </>
        } else {
            return null;
        }
    }

    return <div className={`player-character player-character-${character.id}`} {...rest}>
        <ChildFnComponent defaultRender={() => defaultPlayerCharacterRender()}
            fnArgs={{ character }}>
            {children}
        </ChildFnComponent>
    </div>
}