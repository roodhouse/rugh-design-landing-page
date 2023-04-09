import './App.css';
import Consult from './components/Consult';
import Home from './components/Home';
import Navbar from './components/Navbar';
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
    </div>
  );
}

export default App;
