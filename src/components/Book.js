import React from 'react';

import '../styles//Book.css';

const Book = ( { details, buttonText, handleClick, updateNotes } ) => {
    const { name, author, coverimg, desc } = details;

    console.log(details)
    return (
        <div>
            <div id="book-cover">
                <img src={coverimg} alt={name} id="cover-image" />
            </div>
            
            <div id="book-details">
                <br />
                <div id="book-title">&nbsp;{name}</div>
                <br />
                By {author}
                <br />
                <br />
                {desc}
                <br />
                <button onClick={e=>{handleClick(e)}}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Book;