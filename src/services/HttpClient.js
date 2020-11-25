import axios from 'axios';


const BASE_URL = 'https://bad-api-assignment.reaktor.com';

const get = async (url) => {
    return axios.get(url);
};

export const fetchProducts = async (resourcePath) => {
    const response = await get(`${BASE_URL}/products/${resourcePath}`);
    return response.data
};

export const fetchAvailabilities = async (manufacturer) => {
    const response = await get(`${BASE_URL}/availability/${manufacturer}`);
    if (typeof response.data.response === 'string' && response.data.response === "[]") {
        return fetchAvailabilities(manufacturer);
    }
    return { manufacturer, availabilities: response.data.response} ;
};