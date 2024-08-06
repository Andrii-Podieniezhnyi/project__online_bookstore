import React from 'react';
import { BrowserRouter as Router, Route, Routs} from 'react-router-dom';
import { Header } from './components/header/header';
import './components/header/header.css'
import { Footer } from './components/footer/footer';
import './components/footer/footer.css';
import BookList from './components/book_list/book_list';
import './components/book_list/book_list.css';
import './style/index.css'

function App() {
  return (
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
  );
}

export default App;
