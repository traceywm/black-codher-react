import React from 'react';
import Book from './Books';

const BookList = (props) => {
    return(
        <div>
            {props.books.map(book => (
                <>
                    <Book key={book.id} book={book} addBook={props.addbook}/>
                </>
            ))}
        </div>
    );
}

export default BookList;