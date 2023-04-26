import './App.css';
import Consult from './components/Consult';
import Edesign from './components/Edesign';
import Home from './components/Home';
import Navbar from './components/Navbar.jsx';
import Work from './components/Work';
import Review from './components/Review';
import Samples from './components/Samples';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Color from './components/color/Home';
import Wheel from './components/color/Wheel';
import Scheme from './components/color/schemes/Color'
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
// import NavbarTwo from './components/testnavbar';
import Create from './components/create';
import Edit from './components/edit';
import RecordList from './components/recordList';

function App() { 
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ScrollToTop />
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
        <Routes>
          <Route path='/portfolio' element={[<Navbar />, <Portfolio />]} />
          <Route path='/color-wheel' element={[<Navbar />, <Color />, <Wheel />]} />
          <Route path='/color-wheel/:id' element={[<Navbar />,<Scheme />]} />
        </Routes>
      <Footer />

      {/* <NavbarTwo /> */}
      <Routes>
      <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>

    </HelmetProvider>
  );
}

export default App;
