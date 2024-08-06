import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { BookProvider } from './components/book_context/book_provider';
import { Header } from './components/header/header';
import './components/header/header.css'
import { Footer } from './components/footer/footer';
import './components/footer/footer.css';
import BookList from './components/book_list/book_list';
import { BookModal } from './components/book_modal/book_modal';
import './components/book_list/book_list.css';
import './style/index.css'

function App() {
  return (
    <Router>
      <BookProvider>
        <Routes>
          <Route path = "/" element = {<BookList />}> </Route>
          <Route path = "/book/:id" element = {<BookModal />}></Route>
          <div>
            <div>
              <Header />
            </div>
            <div>
              <BookList />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </Routes>
      </BookProvider>
    </Router> 
  );
}

export default App;
