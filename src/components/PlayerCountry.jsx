import React from 'react';
import Flag from 'react-world-flags';
import { ChildFnComponent } from './ChildFnComponent';

export const PlayerCountry = ({ country, children, ...rest }) => {

    function defaultPlayerCountryRender() {
        if (country && country.code) {
            return <div className="player-country-flag">
                <Flag code={country.code} />
            </div>;
        } else {
            return null;
        }
    }

    return <div className={`player-country player-country-${country.code}$`}
        data-country-code={country.code}
        data-country-name={country.name}
        title={country.name || null}
        {...rest}>
        <ChildFnComponent
            defaultRender={() => defaultPlayerCountryRender()}
            fnArgs={{
                country
            }}>
            {children}
        </ChildFnComponent>
        {children}
    </div>
}