import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Preloader } from "../preloader/preloader";
import { useBooks } from "../book_context/book_context";
import { BookModal } from "../book_modal/book_modal";



const BookList = () => {

  const { books, loading } = useBooks();
  const [ selectedBook, setSelectedBook ] = useState(null);

  const handleCardClick = (book) => {
    setSelectedBook(book);
    console.log("+");
    console.log(book.id);
  }

  const handleCloseModal = () => {
    setSelectedBook(null)
  }



  return (
    <main>
      <section>
          { loading ? (<Preloader />) : (
             <div className='container mt-4 main_container'>
              <div className='row'> 
                {books.map((book) => (
                  <div 
                    className='col-lg-3 col-md-4 col-sm-6 mb-4' 
                    key={book.id}
                    onClick={() => handleCardClick(book)}
                    >
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
                {selectedBook && (<BookModal book={selectedBook} onClose={handleCloseModal} />)}
              </div>
            </div>  
            )
          }
      </section>
    </main>
  )
}


export default BookList;