import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { apiLib } from '../../apiConnect/api';
import BookRegisteredItem from './book-page/book-registered-item';

const BookRegistered = () => {

    const token = window.localStorage.getItem('isLoggedIn');
    const router = useRouter();
    const [books, setBooks] = useState([]);

    //====GET book registered
    const getRegisteredBook = () => {
        apiLib
            .get('/int/book/getBookRegister', {
                headers: {
                    authorization: token,
                },
            })
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getRegisteredBook();
    }, []);

    //=== Unregister book
    const unRegisterBook = (id) => {
        apiLib
            .put(
                '/int/book/unregisterbook',
                {
                    bookId: [id],
                    username: 'testacc',
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            )
            .then((res) => {
                alert('Unregistered this book');
                router.replace('/library/registered')
                setShow('d-none');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='container-fluid mt-5'>
            <h3 className='text-center mb-4'>BOOK REGISTERED</h3>
            <BookRegisteredItem books={books} unRegisterBook={unRegisterBook}/>
        </div>
    );
};

export default BookRegistered;
