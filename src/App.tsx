import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HelloWorld from './components/HelloWorld';
import MainContador from './components/MainContador';
import ConsumirApi from "./components/ConsumirApi";
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HelloWolrd</Link>
            </li>
            <li>
              <Link to="/contador">Contador</Link>
            </li>
            <li>
              <Link to="/api">Consumo de API</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HelloWorld/>} />
          <Route path="/contador" element={<MainContador/>} />
          <Route path="/api" element={<ConsumirApi/>} />
        </Routes>
      </div>
    </Router>
  );
}