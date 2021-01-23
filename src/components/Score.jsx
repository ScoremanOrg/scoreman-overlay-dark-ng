import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';

export const Score = ({ score, children, ...rest }) => {
    function defaultScoreRender() {
        if (typeof score === 'number') {
            return score;
        } else {
            return null;
        }
    }

    return <div className={`score`} {...rest}>
        <ChildFnComponent defaultRender={() => defaultScoreRender()}
            fnArgs={{score}}>
            {children}
        </ChildFnComponent>
    </div>
}