import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BookRenderItem = ({ book }) => {
    const router = useRouter();

    const handleClick = (id) => {
        router.push({
            pathname: '/library/[bookId]',
            query: {
                bookId:id,
            },
        });
    };

    return (
        <div>
            <div className='card_product m-3'>
                <div className='row'>
                    <div className='col-4'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={book.image}
                            alt='book'
                            width='150px'
                            height='170px'
                            className='m-1'
                        />
                    </div>
                    <div className='col-8 text-left'>
                        <h4 className='text-center mt-2 font-weight-bold'>
                            {book.name}
                        </h4>
                        <hr />
                        <div className='row'>
                            <p className='col-12 col-md-6 text-center'>
                                Author:
                                <br /> {book.author}
                            </p>
                            <p className='col-12 col-md-6 text-center'>
                                Category:
                                <br /> {book.category}
                            </p>
                        </div>
                        <hr />
                        <div className='text-center mb-2'>
                            <button
                                className='btn btn-primary'
                                onClick={() => {
                                    handleClick(book.id);
                                }}
                            >
                                Book Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookRenderItem;
