import React, { useEffect, useState } from 'react';
import { apiLib } from '../../apiConnect/api';
import { useRouter } from 'next/router';
import BookRenderItem from './book-page/book-item';
import BookMenu from './book-page/book-menu';

const BookList = () => {
    const router = useRouter();
    const [allBook, setAllBook] = useState([]);
    const getBooks = () =>
        apiLib
            .get('/ext/book')
            .then((res) => setAllBook(res.data))
            .catch((err) => console.log(err));

    useEffect(() => {
        getBooks();
    }, []);


    const BookItem = () =>
        allBook.map((book) => {
            if (book.bookStatus !== 'INACTIVE') {
                return (
                    <div key={book.id} className='col-10 col-md-4'>
                        <BookRenderItem book={book}/>
                    </div>
                );
            } else return <div></div>;
        });
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2 menu__book-list'>
                    <BookMenu />
                </div>
                <div className='col-10'>
                    <h3>LIBRARY</h3>
                    <div className='row'>
                        <BookItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookList;
