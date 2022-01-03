import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BookMenu = () => {
    const router = useRouter();
    const logout = () => {
        if (confirm('Do you want to log out?') == true) {
            localStorage.removeItem('isLoggedIn');
            router.replace('/');
        } else return;
    };
    return (
        <div>
            <div className='text-light text-left mt-3'>
                <form className='row m-auto'>
                    <input
                        type='text'
                        className='form-control col-8'
                        placeholder='Search...'
                    />
                    <i className='btn btn-success fa fa-search col-3'></i>
                </form>
                <div className='menu__book-item'>
                    <Link href='/library/addbook'>
                        <a className='link'>
                            <i className='fa fa-plus col-3'></i>
                            Add new book
                        </a>
                    </Link>
                    <Link href='/library/registered'>
                        <a className='link'>
                            <i className='fa fa-check col-3'></i>
                            Book Registered
                        </a>
                    </Link>
                    <Link href='/library/borrowed'>
                        <a className='link'>
                            <i className='fa fa-check-square col-3'></i>
                            Book Borrowed
                        </a>
                    </Link>
                    <button
                        onClick={() => {
                            logout();
                        }}
                        className='link sign__out'
                    >
                        <i className='fa fa-sign-out'></i> SIGN OUT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookMenu;
