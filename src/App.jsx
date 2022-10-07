import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import Header from './components/Header';
import AhorcadoPage from './pages/AhorcadoPage';
import DevelopersPage from './pages/DevelopersPage';
import InfoDevelopers from './components/InfoDevelopers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MenuPage />} />
          <Route path='/Juegos' element={<AhorcadoPage />} />
          <Route path='/Desarrolladores' element={<DevelopersPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
