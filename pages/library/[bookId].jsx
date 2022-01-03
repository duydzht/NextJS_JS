import { useRouter } from 'next/router';
import React from 'react';
import BookDetail from '../../components/library/book-detail';

const BookWithId = () => {
    const router = useRouter();
    const bookId = router.query.bookId

    return (
        <div>
            <BookDetail bookId={bookId}/>
        </div>
    );
}

export default BookWithId;
