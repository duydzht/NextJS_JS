import React, { useState, useEffect } from 'react';
import { apiLib } from '../../apiConnect/api';
import dateFormat from 'dateformat';
import Image from 'next/image';
import BookEdit from './book-edit';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useRouter } from 'next/router';

const BookDetail = (props) => {
    const router = useRouter();
    const [books, setBooks] = useState([]);
    const getAllBooks = () => {
        apiLib
            .get('/ext/book')
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getAllBooks();
    }, []);

    const token = localStorage.getItem('isLoggedIn');
    const book = books.filter((book) => book.id == props.bookId)[0];

    //Modal edit
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);

    //===DELETE
    const deleteBook = (id) => {
        apiLib
            .delete(`/ext/book/${id}`, {
                headers: {
                    authorization: token,
                },
            })
            .then((res) => {
                alert('Delete this book successfully');
                router.push('/library');
            })
            .catch((err) => console.log(err));
    };

    //====REGISTER
    const registerBook = (id) => {
        console.log([id]);
        const request = {
            bookId: [id],
            username: 'testacc',
        };
        apiLib
            .post('/ext/book/registerbook', request, {
                headers: {
                    authorization: token,
                },
            })
            .then((res) => {
                alert('Register book successfully');
            })
            .catch((err) => {
                console.log(err);
                alert('Register Failed' + err.status);
            });
    };
    if (book) {
        return (
            <div>
                <div className='card__detail row'>
                    <div className='col-12 col-md-4'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={book.image}
                            alt='book'
                            width='200px'
                            height='220px'
                            className='m-1'
                        />
                        <p>
                            ????nh gi??:{' '}
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i
                                className='fa fa-star-half-o'
                                aria-hidden='true'
                            ></i>
                        </p>
                    </div>
                    <div className='col-12 col-md-8'>
                        <h3>{book.name}</h3>
                        <p>{dateFormat(book.publishDate, 'dd-mm-yyyy')}</p>
                        <hr />
                        <div className='row'>
                            <div className='col-6 col-6'>
                                <p>
                                    Author: <i>{book.author}</i>
                                </p>
                                <p>
                                    Category: <i>{book.category}</i>
                                </p>
                            </div>
                            <div className='col-6 col-6'>
                                <p>
                                    Page Number: <i>{book.pageNumber}</i>
                                </p>
                                <p>
                                    Quantity: <i>{book.quantity}</i>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h4>{book.description}</h4>
                        </div>
                        <hr />
                        <button
                            className='btn btn-success'
                            onClick={() => handleClick()}
                        >
                            Edit
                        </button>
                        <button
                            className='btn btn-danger'
                            onClick={() => deleteBook(book.id)}
                        >
                            Delete
                        </button>
                        <button
                            className='btn btn-warning'
                            onClick={() => registerBook(book.id)}
                        >
                            Register borrow
                        </button>
                    </div>
                </div>

                <Modal isOpen={open} toggle={handleClick} className='col-10'>
                    <ModalHeader>Edit Book</ModalHeader>
                    <ModalBody>
                        <BookEdit book={book} />
                    </ModalBody>
                </Modal>
            </div>
        );
    } else return <div></div>;
};

export default BookDetail;
