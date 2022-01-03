import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { apiLib } from '../../apiConnect/api';

const BookInsert = () => {
    const router = useRouter();
    const token = localStorage.getItem('isLoggedIn')
    const [book, setBook] = useState({
        image: '',
        name: '',
        author: '',
        publishDate: '',
        bookStatus: '',
        category: '',
        description: '',
        pageNumber: '',
        quantity: '',
    });
    const addNewBook = (e) => {
        e.preventDefault();
        console.log(book);
        apiLib.post('/int/book', book, {
            headers: {
                authorization: token
            }
        }).then(()=>{
            alert('Add new book successfully');
            router.push('/library')
        }).catch(err => console.error(err));
    };
    return (
        <div className='page__add-book'>
            <h4>ADD NEW BOOK</h4>
            <form onSubmit={addNewBook}>
                <div className='row'>
                    <div className='col-10 col-md-6'>
                        <div>
                            <label className=''>Link Image:</label>
                            <input
                                className='form-control'
                                type='text'
                                name='image'
                                placeholder='image'
                                value={book.image}
                                onChange={(e) =>
                                    setBook({
                                        ...book,
                                        image: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className=''>Name:</label>
                            <input
                                className='form-control'
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={book.name}
                                onChange={(e) =>
                                    setBook({
                                        ...book,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className=''>Author:</label>
                            <input
                                className='form-control'
                                type='text'
                                name='author'
                                placeholder='author'
                                value={book.author}
                                onChange={(e) =>
                                    setBook({
                                        ...book,
                                        author: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className=''>Publish date:</label>
                            <input
                                className='form-control'
                                type='date'
                                name='publishDate'
                                placeholder='publishDate'
                                value={book.publishDate}
                                onChange={(e) =>
                                    setBook({
                                        ...book,
                                        publishDate: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className='col-10 col-md-6'>
                        <div>
                            <label className=''>Status:</label>
                            <input
                                disabled
                                className='form-control'
                                type='text'
                                name='bookStatus'
                                placeholder='bookStatus'
                                value='ACTIVE'
                                onChange={(e) =>
                                    setBook({
                                        ...book,
                                        bookStatus: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className=''>Category:</label>
                            <input
                                className='form-control'
                                type='text'
                                name='category'
                                placeholder='category'
                                value={book.category}
                                onChange={(e) =>
                                    setBook({
                                        ...book,
                                        category: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className=''>Page Number:</label>
                            <input
                                className='form-control'
                                type='number'
                                name='pageNumber'
                                placeholder='pageNumber'
                                value={book.pageNumber}
                                onChange={(e) =>
                                    setBook({
                                        ...book,
                                        pageNumber: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className=''>Quantity:</label>
                            <input
                                className='form-control'
                                type='number'
                                name='quantity'
                                placeholder='quantity'
                                value={book.quantity}
                                onChange={(e) =>
                                    setBook({
                                        ...book,
                                        quantity: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className='text-center mt-2'>
                    <label className=''>Description:</label>
                    <div>
                        <input
                            className='form-control'
                            type='text'
                            name='description'
                            placeholder='description'
                            value={book.description}
                            onChange={(e) =>
                                setBook({
                                    ...book,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <button className='btn btn-success mt-2 mb-5'>Create</button>
            </form>
        </div>
    );
};

export default BookInsert;
