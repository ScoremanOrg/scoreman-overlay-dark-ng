import React from 'react';
import { Commentators } from '../../components/Commentators';
import { Entrants } from '../../components/Entrants';
import { GameArea } from '../../components/GameArea';
import { Overlay } from '../../components/Overlay';
import { TournamentDetails } from '../../components/TournamentDetails';

export const InGameWideScreenOverlay = () => {
    return <Overlay id="ingame-widescreen">
        <Entrants />
        <GameArea />
        <Commentators />
        <TournamentDetails />
    </Overlay>
}