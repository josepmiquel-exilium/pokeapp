import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_API;

const client = axios.create({
    baseURL,
});

export default client;
