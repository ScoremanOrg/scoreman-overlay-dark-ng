import { useContext } from "react";
import { ScoreboardContext } from "../contexts/ScoreboardContext";
import dotProp from "dot-prop";

export const useScoreboard = (path) => {
    const [scoreboard, setScoreboard] = useContext(ScoreboardContext);

    const set = (data) => {
        setScoreboard((scoreboard) => {
            return dotProp.set(scoreboard, path, data);
        })
    }

    const get = () => {
        return dotProp.get(scoreboard, path);
    }

    return [get(), set];
}