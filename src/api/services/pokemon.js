import client from '../client';

export const getPokemonByName = (name) => {
    return client.get(`pokemon/${name}`);
};
