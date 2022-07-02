import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import EventState from './Context/events/EventState';

function App() {
  return (
  <>
  <EventState>
  <BrowserRouter>
  <Navbar/>
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  </EventState>
  </>
  );
}

export default App;
