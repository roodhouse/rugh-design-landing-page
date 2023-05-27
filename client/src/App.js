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
import Login from './components/login/Login';

function App() { 
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={
            [
              <Home key={1} />, 
              <Consult key={2} />, 
              <Samples key={3} />,
              <Review key={4} />,
              <Edesign key={5} />,
              <Work key={6} />,
              <Footer key={7} />
            ]
          }/>
        </Routes>
        <Routes>
          <Route path='/portfolio' element={[<Navbar key={1} />, <Portfolio key={2} />, <Footer key={3} />]} />
          <Route path='/color-wheel' element={[<Navbar key={1} />, <Color key={2} />, <Wheel key={3} />, <Footer key={4} />]} />
          <Route path='/color-wheel/:id' element={[<Navbar key={1} />,<Scheme key={2} />, <Footer key={3} />]} />
        </Routes>
        <Routes>
          <Route path='/review' element={[<Navbar key={1} />, <BlogReview key={2} />]} />
          <Route path='/review/:slug' element={[<Navbar key={1} />, <Posts key={2} />]} />
        </Routes>
        <Routes>
          <Route path='/login' element={[<Navbar key={1} />,<Login key={2} />, <Footer key={3} />]} />
        </Routes>
        {/* <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        </Routes> */}
    </HelmetProvider>
  );
  
}

export default App;
