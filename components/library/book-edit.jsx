import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { apiLib } from '../../apiConnect/api';


const BookEdit = (props) => {
    const router = useRouter();
    const [book, setBook] = useState({
        id: props.book.id,
        image: props.book.image,
        name: props.book.name,
        author: props.book.author,
        publishDate: props.book.publishDate,
        bookStatus: props.book.bookStatus,
        category: props.book.category,
        description: props.book.description,
        pageNumber: props.book.pageNumber,
        quantity: props.book.quantity,
    })
    //===EDIT
    const token = localStorage.getItem('isLoggedIn')
    const postEditBook = (e) => {
        e.preventDefault();
        console.log(token);
        apiLib.put('/ext/book', book, {
            headers: {
                authorization: token
            }
        }).then(()=>{
            alert('Update this book successfully');
            router.reload(`/library/${book.id}`)
        }).catch(err =>{ 
            // alert('Error updating');
            console.log(err);
        });
    };

    return (
        <form onSubmit={postEditBook}>
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
                <button className='btn btn-success mt-2 mb-5'>Update</button>
            </form>
    );
}

export default BookEdit;
