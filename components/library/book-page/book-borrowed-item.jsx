import React from 'react';

const BookBorrowedItem = (props) => {
    const bookItem = props.books.map((book) => {
        if (book) {
            if (book.bookStatus !== 'INACTIVE') {
                return (
                    <div key={book.id} className='col-6 col-md-4'>
                        <div className='card__regis row container'>
                            <div className='col-8'>
                                <p>Author: {book.author}</p>
                                <p>Category: {book.category}</p>
                            </div>
                            <div className='col-4'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={book.image}
                                    alt='book'
                                    width='120px'
                                    height='150px'
                                />
                                <p className='text-light font-weight-bold'>
                                    {book.name}
                                </p>
                            </div>
                            <hr />
                            <button
                                onClick={() => {
                                    props.unBorrowedBook(book.id);
                                }}
                                className='btn btn-warning m-auto text-light'
                            >
                                Return Book
                            </button>
                        </div>
                    </div>
                );
            } else return <div></div>;
        } else return <div></div>;
    });
    return <div className='row'>{bookItem}</div>;
};

export default BookBorrowedItem;
