import { useEffect, useMemo, useState } from "react"

import { ScoreboardRepository } from "../repositories/ScoreboardRepository";

export const useUpdatedScoreboard = (apiUrl, refreshTime=1000) => {
    const [scoreboard, setScoreboard] = useState(null);

    const scoreboardRepository = useMemo(() => new ScoreboardRepository(apiUrl), [apiUrl]);

    useEffect(() => {
        async function getScoreboard()  {
            const freshScoreboard = await scoreboardRepository.get();
            setScoreboard(freshScoreboard);
        }

        const timeoutId = window.setTimeout(() => getScoreboard(), refreshTime);

        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        }
    }, [scoreboard, refreshTime, scoreboardRepository]);

    /**
     * Posts a new scoreboard to server
     * @param {scoreboard} data the scoreboard to post
     */
    async function postNewScoreboard(data) {
        const freshScoreboard = await scoreboardRepository.post(data);
        setScoreboard(freshScoreboard);
    }

    return [scoreboard, postNewScoreboard];
}