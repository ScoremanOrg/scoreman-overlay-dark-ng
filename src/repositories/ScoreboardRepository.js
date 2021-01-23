import { BaseRepository } from "./BaseRepository";

export class ScoreboardRepository extends BaseRepository {
    async get() {
        return super.get('/api/scoreboard');
    }

    async post(data) {
        return super.post('/api/scoreboard', data);
    }
}
