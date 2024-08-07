import React from "react";



export const BookModal = ({ book, onClose }) => {

    if(!book) return null;


    // Інлайн стилі для модального вікна
    const modalStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Напівпрозорий фон
        zIndex: 1000, // Задає, що модальне вікно буде поверх іншого контенту
    };

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
        <div style={modalStyles}>
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