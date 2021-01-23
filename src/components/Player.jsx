import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';
import { PlayerCharacter } from './PlayerCharacter';
import { PlayerCountry } from './PlayerCountry';
import { PlayerName } from './PlayerName';
import { PlayerSponsor } from './PlayerSponsor';
import { PlayerStatus } from './PlayerStatus';

export const Player = ({ player, children, index, ...rest }) => {
    const indexClassName = !!isNaN(index) ? ` player-${index}` : '';

    function defaultPlayerRender() {
        if (player) {
            return <>
                {player.status ? <PlayerStatus status={player.status}/> : null}
                <PlayerName name={player.name} />
                <PlayerCharacter character={player.character} />
                <PlayerCountry country={player.country} />
                <PlayerSponsor sponsor={player.sponsor} />
                {children}
            </>
        } else {
            return null;
        }
    }

    return <div className={`player${indexClassName}`} {...rest}>
        <ChildFnComponent defaultRender={() => defaultPlayerRender()}
            fnArgs={{player}}>
            {children}
        </ChildFnComponent>
    </div>
}