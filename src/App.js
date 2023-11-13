import './App.css';
import UseState from './Templates/Hooks/UseState/UseState';
import Mainpage from './Templates/Mainpage/Mainpage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/hooks/useState" element={<UseState />} />
      </Routes>
    </div>
  );
}

export default App;
