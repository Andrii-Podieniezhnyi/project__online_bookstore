import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Database, ref, onValue } from "firebase/database";
import { database } from "../../firebase";



const BookList = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const booksRef = ref(database, 'books');
    onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      const booksArray = Object.values(data);
      setBooks(booksArray); 
    });

  }, []);


  return (
    <main>
      <section>
          <div className='container mt-4 main_container'>
              <div className='row'>
                {books.map((book) => (
                  <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                    <div className="card">
                      <img src={book.cover} className="card-img-top" alt={book.title} />
                      <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.author}</p>
                        <p className="card-text">{book.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
      </section>
    </main>
  )
}