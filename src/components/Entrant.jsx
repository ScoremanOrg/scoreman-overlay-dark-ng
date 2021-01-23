import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';
import { EntrantName } from './EntrantName';
import { Players } from './Players';
import { Score } from './Score';

export const Entrant = ({ entrant, displayName, children, index, ...rest }) => {
    const indexClassName = typeof index === 'number' ? ` entrant-${index}` : '';

    function defaultEntrantRender() {
        if (entrant) {
            return <>
                <Players players={entrant.players} />
                <Score score={entrant.score} />
                {displayName ? <EntrantName name={entrant.name} /> : null}
            </>
        } else {
            return null;
        }
        
    }

    return <div className={`entrant${indexClassName}`} {...rest}>
        <ChildFnComponent defaultRender={() => defaultEntrantRender()}
            fnArgs={{entrant}}>
            {children}
        </ChildFnComponent>
    </div>
}