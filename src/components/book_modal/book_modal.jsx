import React from "react";



export const BookModal = ({ book, onClose }) => {

    if(!book) return null;


  

    const contentStyles = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '500px',
        width: '90%',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    };

    const closeButtonStyles = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        background: 'none',
        fontSize: '20px',
        cursor: 'pointer',
    };

    return (
        <div className="modal_window_style">
            <div style={contentStyles}>
                <button style={closeButtonStyles} onClick={onClose}>&times;</button>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <ul>
                    {book.benefits?.map((benefits, index) => (
                        <li key={index}>{benefits}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}