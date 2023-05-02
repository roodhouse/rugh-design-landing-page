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
import Portfolio from './components/Portfolio';
import Color from './components/color/Home';
import Wheel from './components/color/Wheel';
import Scheme from './components/color/schemes/Color'
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Create from './components/mongoTest/create';
import Edit from './components/mongoTest/edit';
import RecordList from './components/mongoTest/recordList';
import Navigation from './components/mongoTest/navbar';
import Dashboard from './components/dashboard/Dashboard';
import BlogReview from './components/blog/Review';
import Posts from './components/blog/Posts';

function App() { 
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ScrollToTop />
        {/* <Routes>
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
        </Routes> */}
        {/* <Navigation /> */}
        <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path='/review' element={<BlogReview />} />
        <Route path='/review/:id' element={[<Navbar />, <Posts />]} />
      </Routes>
      {/* <Footer /> */}
    </HelmetProvider>
  );
}

export default App;
