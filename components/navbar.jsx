import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <>
            <div className='container indigo topLeftBorders'>
                <Link href='/'>
                    <a>HOME</a>
                </Link>
                <Link href='/library'>
                    <a>LIBRARY</a>
                </Link>
                <Link href=''>
                    <a>PORTFOLIO</a>
                </Link>
                <Link href='/about'>
                    <a>ABOUT</a>
                </Link>
                <Link href=''>
                    <a>CONTACT</a>
                </Link>
            </div>
        </>
    );
}
