import React from 'react';
import { Header } from './components/header/header';
import './components/header/header.css'
import { Footer } from './components/footer/footer';
import './components/footer/footer.css';
import { Main } from './components/main/main';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div> 
  );
}

export default App;
