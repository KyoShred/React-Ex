import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Ex1 from './Pages/Ex1';
import Ex2 from './Pages/Ex2';
import Ex3 from './Pages/Ex3';
import Layout from './Pages/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        {/* <Route> */}
          <Route index element={<Home />}/>
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