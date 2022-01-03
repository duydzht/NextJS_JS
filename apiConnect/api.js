import axios from 'axios'

export const apiLib =  axios.create({
    baseURL: 'http://127.0.0.1:8093/',
});

// export const apiLib =  axios.create({
//     baseURL: 'http://e315-2402-800-61b1-e037-24fd-1848-ff42-341d.ngrok.io/',
// });

export const apiStu = axios.create({
    baseURL: 'http://localhost:8085/',
});

// export const apiStu =  axios.create({
//     baseURL: 'http://dc7b-113-183-116-94.ngrok.io/',
// });

export const apiAcc = axios.create({
    baseURL: 'http://localhost:8091/',
});

// export const apiAcc =  axios.create({
//     baseURL: 'http://15b0-14-232-152-250.ngrok.io/',
// });
