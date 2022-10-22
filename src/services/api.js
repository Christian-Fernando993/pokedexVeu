import axios from 'axios'

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    timeout: 1000,
});


export const apiAxios = {
    get(endpoint) {
        return api.get(endpoint);
    }
}