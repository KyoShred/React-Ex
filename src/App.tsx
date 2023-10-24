import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Ex1 from './Pages/Ex1';
import Ex2 from './Pages/Ex2';
import Ex3 from './Pages/Ex3';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='ex1' element={<Ex1 />}/>
          <Route path="ex2" element={<Ex2 />}/>
          <Route path="ex3" element={<Ex3 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
 root.render(<App />);