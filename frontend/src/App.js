import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import { useContext } from 'react';
import { Store } from './Store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
