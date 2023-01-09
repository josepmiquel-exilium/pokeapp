import client from '../client';

export const getPokemonByName = (name) => {
    return client.post(`pokemon/${name}`);
};
