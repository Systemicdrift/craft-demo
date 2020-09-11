const pokeApiURL = 'https://pokeapi.co/api/v2/pokemon';
const locationApiURL = 'https://api.craft-demo.net/pokemon/';
const apiKey = 'HHko9Fuxf293b3w56zAJ89s3IcO9D5enaEPIg86l';

export async function getPokemons(url="") {
    if (url !== "") {
        return fetch(url);
    }
    return fetch(`${pokeApiURL}?offset=0&limit=151"`);
}

export function getPokemon(url="") {
    if (url !== "") {
        return fetch(url)
    }
}

export function getPokemonLocation(id) {
    return fetch(`${locationApiURL}${id}`, {
        headers: {'x-api-key': apiKey}
    });
}