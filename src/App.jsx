import './css/App.css'
import Card from './components/Card'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import {MovieProvider} from './context/MovieContext';


function App() {

  const movieNumber = 2;
  return (
    <MovieProvider>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites/>} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
