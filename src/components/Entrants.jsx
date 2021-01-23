import React from 'react';
import { useScoreboard } from '../hooks/useScoreboard';
import { ChildFnComponent } from './ChildFnComponent';
import { Entrant } from './Entrant';

export const Entrants = ({ children }) => {
    const [entrants, setEntrants] = useScoreboard('entrants');

    function defaultEntrantsRender(entrants) {
        return (entrants || []).map((entrant, i) => (
            <Entrant entrant={entrant}
                displayName={(entrant.players || []).length > 1}
                index={i} key={i} />
        ))
    }

    return <div className="entrants">
        <ChildFnComponent
            defaultRender={() => defaultEntrantsRender(entrants)}
            fnArgs={{
                entrants: entrants || [],
                setEntrants
            }}>
            {children}
        </ChildFnComponent>
    </div>
}