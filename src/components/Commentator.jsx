import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';

export const Commentator = ({ commentator, index, children, ...rest }) => {
    const indexClassName = typeof index === 'number' ? ` commentator-${index}` : '';

    function defaultCommentatorRender() {
        if (commentator && commentator.enabled) {
            return <>
                <div className="commentator-name">{commentator.name}</div>
                <div className="commentator-handle">{commentator.handle}</div>
            </>
        } else {
            return null;
        }
    }

    return <div className={`commentator${indexClassName}`} {...rest}>
        <ChildFnComponent defaultRender={() => defaultCommentatorRender()}
            fnArgs={{ commentator }}>
            {children}
        </ChildFnComponent>
    </div>
}