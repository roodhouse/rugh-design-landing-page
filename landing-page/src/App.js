import './App.css';
import Consult from './components/Consult';
import Edesign from './components/Edesign';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Review from './components/Review';
import Samples from './components/Samples';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Consult />
      <Samples />
      <Review />
      <Edesign />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
