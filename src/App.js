import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './NavBar'
import VendingMachine from './VendingMachine';
import Soda from './Soda'
import Sardine from './Sardine'
import Chip from './Chip'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/soda" element={<Soda/>} />
          <Route path="/chip" element={<Chip/>} />
          <Route path="/sardine" element={<Sardine/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
