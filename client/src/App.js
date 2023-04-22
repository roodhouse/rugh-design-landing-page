import './App.css';
import Consult from './components/Consult';
import Edesign from './components/Edesign';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Review from './components/Review';
import Samples from './components/Samples';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';

function App() { 
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
        <Routes>
          <Route path='/' element={
            [
              <Home />, 
              <Consult />, 
              <Samples />,
              <Review />,
              <Edesign />,
              <Work />
            ]
          }/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
