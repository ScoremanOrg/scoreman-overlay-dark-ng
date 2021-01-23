import { BaseRepository } from "./BaseRepository";

export class GameConfigRepository extends BaseRepository {
    gameConfigs = null;

    async get() {
        if (!this.gameConfigs) {
            this.gameConfigs = await super.get('/config/games.json');
        }

        return this.gameConfigs;
    }

    async getById(configId) {
        const gameConfigs = await this.get();

        return gameConfigs.find((gameConfig) => gameConfig.id = configId);
    }
}