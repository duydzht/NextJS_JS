import { apiLib } from './api';

export const getAllBooks = () => {
    apiLib
        .get('/ext/book')
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};
