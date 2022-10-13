import axios from 'axios';

const DEV_API = 'http://127.0.0.1:5000/api';
const PRO_API = 'http://swim4love.com/api';

const API_URL = process.env.NODE_ENV === 'production' ? PRO_API : DEV_API;

export function api(path) {
    return `${API_URL}/${path}`;
}

export async function postCredentials(apiPath, id, password) {
    const path = api(apiPath);
    const data = {
        id: id,
        password: password
    };

    return await axios.post(path, data);
}
