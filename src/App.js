import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Media from './components/media';
import InfoSide from 'components/InfoSide';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="row">
          <div className="column left">
          {/* <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes> */}
            <InfoSide />
          </div>
          <div className="column right">
            {/* <Navbar /> */}
            <div className="top-right">
            </div>
            <Media />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
