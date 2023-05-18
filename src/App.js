import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Subcription_chart from './Components/Subcription_chart';

function App() {
  return (
    <>
    <Navbar/>
    <div className="main-page ">
    <Hero/>
    <Subcription_chart/>
    </div>
    </>
  );
}

export default App;
