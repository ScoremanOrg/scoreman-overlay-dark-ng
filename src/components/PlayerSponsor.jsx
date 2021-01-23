import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';

export const PlayerSponsor = ({ sponsor, children, ...rest }) => {
    function defaultPlayerSponsorRender() {
        return sponsor;
    }

    return <div className={`player-sponsor player-sponsor${sponsor}`}
        data-player-sponsor={sponsor} {...rest}>
        <ChildFnComponent defaultRender={() => defaultPlayerSponsorRender()}
            fnArgs={{sponsor}}>
            {children}
        </ChildFnComponent>
    </div>
}