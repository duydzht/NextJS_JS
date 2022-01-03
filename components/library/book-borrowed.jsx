import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { apiLib } from '../../apiConnect/api';
import BookBorrowedItem from './book-page/book-borrowed-item';

const BookRegistered = () => {

    const token = window.localStorage.getItem('isLoggedIn');
    const router = useRouter();
    const [books, setBooks] = useState([]);

    //====GET book registered
    const getBorrowedBook = () => {
        apiLib
            .get('/int/book/getBorrowBook', {
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
        getBorrowedBook();
    }, []);

    //=== Unregister book
    const unBorrowedBook = (id) => {
        apiLib
            .put(
                '/int/book/returnbook',
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
                alert('Returned this book');
                router.replace('/library/borrowed')
                setShow('d-none');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='container-fluid mt-5'>
            <h3 className='text-center mb-4'>BOOK Borrowed</h3>
            <BookBorrowedItem books={books} unBorrowedBook={unBorrowedBook} />
        </div>
    );
};

export default BookRegistered;
