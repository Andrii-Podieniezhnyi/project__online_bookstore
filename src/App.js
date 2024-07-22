import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {Header} from './components/header/header';
import './components/header/header.css'
import { Footer } from './components/footer/footer';
import './components/footer/footer.css'

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='container mt-4 main_container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className="card">
              <img src="path/to/book1.jpg" className="card-img-top" alt="Book 1" />
              <div className="card-body">
                <h5 className="card-title">Book Title 1</h5>
                <p className="card-text">Author Name</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className="card">
                <img src="path/to/book1.jpg" className="card-img-top" alt="Book 1" />
                <div className="card-body">
                  <h5 className="card-title">Book Title 1</h5>
                  <p className="card-text">Author Name</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div> 
  );
}

export default App;
