import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';
import { Player } from './Player';

export const Players = ({ players, children, ...rest }) => {
    function defaultPlayersRender() {
        return (players || []).map((player, i) => (
            <Player player={player} index={i} key={i} />
        ));
    }

    return <div className="players" {...rest}>
        <ChildFnComponent
            defaultRender={() => defaultPlayersRender()}
            fnArgs={{players: players || []}}>
            {children}
        </ChildFnComponent>
    </div>
}