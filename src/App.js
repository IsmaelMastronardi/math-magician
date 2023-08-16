import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import ComputerQuotes from './components/quotes';
import HomePage from './components/Home';
import './App.css';
import './styles/homePage.css';
import './styles/calculator.css';
import './styles/navbar.css';

function App() {
  return (
    <>
      <nav className="pageLinks flexRow">
        <h1 className="pageTitle">Math Magicians</h1>
        <ul className="navList flexRow">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<ComputerQuotes />} />
      </Routes>
    </>
  );
}

export default App;
