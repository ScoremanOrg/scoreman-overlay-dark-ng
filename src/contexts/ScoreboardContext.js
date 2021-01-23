import { createContext } from 'react';

const ScoreboardContext = createContext([
    null,
    () => {}
]);

export { ScoreboardContext };