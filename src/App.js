import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { BookProvider } from './components/book_context/book_provider';
import BookList from './components/book_list/book_list';
import { BookModal } from './components/book_modal/book_modal';
import { AuthScreen } from './components/auth_screen/auth_screen';
import { AuthProvider } from './components/auth_screen/auth_context';
import { Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/protected_route/protected_route';
import { Layout } from './components/layout/layout';

import './components/header/header.css'
import './components/footer/footer.css';
import './components/book_list/book_list.css';
import './style/index.css'
import './components/book_modal/book_modal.css'
import './components/auth_screen/auth_screen.css'




function App() {

  return (
    <Router basename='/project__online_bookstore'>
      <AuthProvider>
        <BookProvider>
          <Routes>
            <Route path = "/" element = {<Navigate to="/auth" />} />
            <Route path = "/" element = {<Layout />}>
              <Route path= "/booklist" element = {<ProtectedRoute><BookList /></ProtectedRoute> }></Route>
              <Route path = "/book/:id" element = {<ProtectedRoute> <BookModal /></ProtectedRoute>}></Route>
            </Route>
            <Route path= "/auth" element = {<AuthScreen />}></Route>
          </Routes>
        </BookProvider>
      </AuthProvider>
    </Router> 
  );
}

export default App;
