import axios from 'axios';
export const login = creds => {
    console.log(creds)
    return axios.post('/auth', {}, { auth: creds });
}