import React from 'react';
import { ChildFnComponent } from './ChildFnComponent';

export const PlayerCharacterColor = ({
    color,
    displayBackground,
    displayName,
    children,
    ...rest }) => {

    const colorStyle = color && displayBackground ? 
        {
            backgroundColor: color.hex
        } : {};

    const playerColorClassName = color && (typeof color.id !== 'undefined') ?
        ` player-character-color-${color.id}` : ''

    function defaultPlayerCharacterColorRender() {
        if (color && displayName) {
            return <span className={`player-character-color-name`}>{color.name}</span>;
        } else {
            return null;
        }
    }

    return <div style={colorStyle}
        className={`player-character-color${playerColorClassName}`} {...rest}
        data-color-hex={color && color.hex ? color.hex : ''}>
        <ChildFnComponent defaultRender={() => defaultPlayerCharacterColorRender()}
            fnArgs={{ color }}>
            {children}
        </ChildFnComponent>
    </div>

}