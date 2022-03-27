import Home from './components/Home/Home.js';
import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Favorite from './components/Favorite/Favorite.js';
import About from './components/About/About.js';
import WrongAddress from './components/WrongAddress/WrongAddress.js';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<WrongAddress />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;