import { baseApiUrl, secretKey } from '../constants/costants';
import axios from 'axios';

export const axiosConfig = axios.create({
    baseURL: baseApiUrl,
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': secretKey,
    },
});
