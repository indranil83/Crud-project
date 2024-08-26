import { useDispatch, useSelector } from 'react-redux'
import Home from './assets/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './assets/Create';
import Update from './assets/Update';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
