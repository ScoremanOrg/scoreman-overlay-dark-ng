import React from 'react';
import { ScoreboardContext } from '../contexts/ScoreboardContext';
import { useUpdatedScoreboard } from '../hooks/useUpdatedScoreboard';
import { ChildFnComponent } from './ChildFnComponent';

export const Scoreboard = ({ children, ...rest }) => {
    const [scoreboard, setScoreboard] = useUpdatedScoreboard();

    return <ScoreboardContext.Provider value={[scoreboard, setScoreboard]}>
        <div className="scoreboard" {...rest}>
            <ChildFnComponent
                defaultRender={() => null}
                fnArgs={{ scoreboard, setScoreboard }}>

                {children}
            </ChildFnComponent>
        </div>
    </ScoreboardContext.Provider>
};