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
import './components/book_modal/book_modal.css'
import { AuthScreen } from './components/auth_screen/auth_screen';
import './components/auth_screen/auth_screen.css'
import { AuthProvider } from './components/auth_screen/auth_context';
import { Navigate } from 'react-router-dom';


function App() {

  

  return (
    <Router>
      <AuthProvider>
        <BookProvider>
          <Header />
            <Routes>
              <Route path = "/" element = {<Navigate to="/auth" />} />
              <Route path= "/booklist" element = {<BookList />}></Route>
              <Route path = "/book/:id" element = {<BookModal />}></Route>
              <Route path= "/auth" element = {<AuthScreen />}></Route>
            </Routes>
          <Footer />
        </BookProvider>
      </AuthProvider>
    </Router> 
  );
}

export default App;
