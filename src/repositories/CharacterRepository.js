import { BaseRepository } from "./BaseRepository";

export class CharacterRepository extends BaseRepository {
    configId;
    config;

    constructor(configId) {
        this.configId = configId;
    }

    async get() {
        if (!this.config) {
            this.config = await super.get(`/config/${configId}.json`);
        } 

        return this.config;
    }

    async getChar(charId) {
        const config = await this.get();

        return config.find((char) => {
            return char.id = charId
        })        
    }
}