
import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className='relative overflow-hidden'>

      <NavBar/>

      <div className='max-w-6xl mx-auto'>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>

      </div>

    </div>
  );
}

export default App;
