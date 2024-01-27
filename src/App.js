import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blocks from './components/Blocks';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
<Header/>
<Hero/>
<Blocks/>
<About/>
<Reviews/>
<Routes>
  <Route path='/footer' element={ <Footer/> }/>
</Routes>
    </div>
  );
}

export default App;
