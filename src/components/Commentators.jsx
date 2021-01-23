import React from 'react';
import { useScoreboard } from '../hooks/useScoreboard';
import { ChildFnComponent } from './ChildFnComponent';
import { Commentator } from './Commentator';

export const Commentators = ({ children }) => {
    const [commentators, setCommentators] = useScoreboard('commentators');

    const defaultCommentatorsRender = (commentators) => {
        return (commentators || []).map((commentator, i) => (
            <Commentator commentator={commentator} index={i} key={i} />
        ));
    }

    return <div className="commentators">
        <ChildFnComponent
            defaultRender={() => defaultCommentatorsRender(commentators)}
            fnArgs={{
                commentators: commentators || [],
                setCommentators
            }}>
            {children}
        </ChildFnComponent>
    </div>
}