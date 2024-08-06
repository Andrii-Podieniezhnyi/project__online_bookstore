import React from "react";
//import { Button } from "bootstrap";
import React from "react";

export const BookModal = ({ book, onClose }) => {

    if(!book) return null;

    return (
        <div>
            <button onClick={onClose}></button>
            console.log('Modal window is active')
        </div>
    )
}