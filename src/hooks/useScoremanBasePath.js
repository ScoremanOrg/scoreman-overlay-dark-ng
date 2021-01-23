import { useEffect, useState } from "react";

export const useScoremanBasePath = () => {
    const [basePath, setBasePath] = useState('');

    useEffect(() => {
        const regex = /(?<basePath>.*\/overlays\/scoreman-overlay-react\/)/
        const matches = window.location.pathname.match(regex);
        const groups = matches && matches.groups;

        console.log({ groups });

        let newBasePath;

        if (groups && groups.basePath) {
            newBasePath = groups.basePath;
        } else {
            newBasePath = '';
        }

        setBasePath(newBasePath);
    }, []);

    return basePath;
};