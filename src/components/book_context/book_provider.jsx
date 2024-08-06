import React, { useState, useEffect } from "react";
import { ref, onValue } from 'firebase/database';
import { database } from "../../firebase";
import { BookContext } from "./book_context";



export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const booksRef = ref(database, 'books');
        onValue(booksRef, (snapshot) => {
            const data = snapshot.val();
      
            console.log("Data from Firebase:", data); 
      
            if (data) {
              const booksArray = Object.values(data);
              setBooks(booksArray);
            } else {
              console.log("No data available");
            }
            setLoading(false);
          }, (error) => {
            console.error("Error fetching data:", error);
            console.log(error.message);
            setLoading(false);
          });
    })
}