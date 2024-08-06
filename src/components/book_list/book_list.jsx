import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { ref, onValue } from "firebase/database";
//import { database } from "../../firebase";
import { Preloader } from "../preloader/preloader";
import { useBooks } from "../book_context/book_context";
import { BookModal } from "../book_modal/book_modal";



const BookList = () => {

  const { books, loading } = useBooks();
/*
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

  }, []);
*/




  return (
    <main>
      <section>
          { loading ? (<Preloader />) : (
             <div className='container mt-4 main_container'>
              <div className='row'> 
                {books.map((book) => (
                  <div className='col-lg-3 col-md-4 col-sm-6 mb-4' key={book.id}>
                    <div className="card" onClick={<BookModal />}>
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
            )
          }
      </section>
    </main>
  )
}


export default BookList;