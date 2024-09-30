import React from "react";
import  './book_modal.css';



export const BookModal = ({ book, onClose }) => {

    if(!book) return null;


    return (
        <div className="modal_window_style">
            <div className="modal_window__content_style">
                <button className="modal_window__close_window_btn" onClick={onClose}>&times;</button>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <ul>
                    {book.benefits?.map((benefits, index) => (
                        <li key={index}>{benefits}</li>
                    ))}
                </ul>
                <p><button className="download_book" onClick = {() => window.open( book.download_link, '_blank') }>pdf</button></p>
            </div>
        </div>
    )
}