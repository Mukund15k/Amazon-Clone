import Header from'./Components/Header'
import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Checkout from './Checkout';



function App() {
  return (
    <Router>
        <div className="App">
           <Header />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/checkout" element={<Checkout />} />
           </Routes>
        </div>
    </Router>
  );
}

export default App;
