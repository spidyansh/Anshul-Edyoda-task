import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Subcription_chart from './Components/Subcription_chart';
import Subscription_plan from './Components/Subscription_plan';

function App() {
  return (
    <>
    <Navbar/>
    <div className="main-page ">
    <Hero/>
    <Subscription_plan/>
    </div>
    </>
  );
}

export default App;
