import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';

export const EntrantName = ({ name, children, ...rest }) => {
    function defaultEntrantNameRender() {
        if (typeof name !== 'undefined') {
            return name;
        }    
    }

    return <div className={`entrant-name`} {...rest}>
        <ChildFnComponent defaultRender={() => defaultEntrantNameRender()}
            fnArgs={{entrantName: defaultEntrantNameRender()}}>
            {children}
        </ChildFnComponent>
    </div>
}