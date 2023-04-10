import './App.css';
import Consult from './components/Consult';
import Edesign from './components/Edesign';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Review from './components/Review';
import Samples from './components/Samples';

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Consult />
      <Samples />
      <Review />
      <Edesign />
      <Portfolio />
    </div>
  );
}

export default App;
