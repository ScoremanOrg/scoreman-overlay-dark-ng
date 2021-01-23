import React, { useEffect, useState } from 'react';
import { useScoreboard } from '../hooks/useScoreboard';

export const TournamentDetails = ({ children }) => {
    const [scoreboard] = useScoreboard();

    const [tournament, setTournament] = useState();

    useEffect(() => {
        if (scoreboard) {
            setTournament({
                name: scoreboard.tournamentName,
                round: scoreboard.round,
                streamer: scoreboard.streamer,
                caster: scoreboard.caster
            });
        }
    }, [scoreboard]);

    return <div className={`tournament`}>
        {tournament ? <>
            <div className="tournament-name">{tournament.name}</div>
            <div className="tournament-round">{tournament.round}</div>
            <div className="tournament-streamer">{tournament.streamer}</div>
            <div className="tournament-caster">{tournament.caster}</div>
            {children}
        </>
            : (children || null)}
    </div>
}