import React from 'react';
import { Commentators } from '../../components/Commentators';
import { Overlay } from '../../components/Overlay';

export const CommentatorsOverlay = () => {
    return <Overlay id="commentators">
        <Commentators />
    </Overlay>;
}