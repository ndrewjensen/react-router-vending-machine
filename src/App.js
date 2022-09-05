import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './NavBar'
import VendingMachine from './VendingMachine';
import Soda from './Soda'
import Sardines from './Sardines'
import Chips from './Chips'

/** Main application: depending on path, show different components. */

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/soda" element={<Soda/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="/sardines" element={<Sardines/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
