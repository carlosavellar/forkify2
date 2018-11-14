const axios = require('axios');
export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        const key = 'a1b08e3162b832ebea7e13e50923eac3';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (err) {
            alert(err);
        }
    }
}