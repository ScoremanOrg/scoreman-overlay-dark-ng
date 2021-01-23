export class BaseRepository {
    baseUrl = null;
    config = null;
    cache = {};

    constructor(apiUrl) {
        if (apiUrl) {
            this.baseUrl = apiUrl;
        }
    }

    // https://stackoverflow.com/a/37954545
    async fetchCached(call, options) {
        if (!this.cache[call]) {
            this.cache[call] = fetch(call, options);
        }

        return this.cache[call].then(r => r.clone());
    }

    async getBasePath() {
        const config = await this.fetchCached('!serverconfig')
            .then((res) => res.json());

        this.config = config;
        this.baseUrl = config.homepage;

        return this.baseUrl;
    }

    async get(call) {
        const baseUrl = await this.getBasePath();
        const req = `${baseUrl}${call}`;

        const headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');

        return fetch(req, {
            method: 'GET',
            headers
        })
            .then((res) => res.json());

    }

    async post(call, data) {
        const baseUrl = await this.getBasePath();

        return fetch(`${baseUrl}/${call}`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((res) => res.json());
    }
} 