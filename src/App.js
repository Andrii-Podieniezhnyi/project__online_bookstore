import React from 'react';
import { BrowserRouter as Router, Route, Routs} from 'react-router-dom';
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
        <Routs>
          <Route path = "/" element = {<BookList />}> </Route>
          <Route path = "/book/:id" element = {<BookModal />}></Route>
        </Routs>
      </BookProvider>
    </Router> 
  );
}

export default App;
