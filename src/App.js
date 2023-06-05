import './App.css';
import {Routes,Route } from 'react-router-dom';
import './components/site.css'
import About from './components/About';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Skills from './components/Skills';

function App() {
  return (
   <>
   <Navbar/>
  <Routes>
      <Route exact path='/'       element={<Home/>} />
      <Route exact path='/about'  element={<About/>}/>
      <Route exact path='/navbar' element={<Navbar/>}/>
      <Route exact path='/skills' element={<Skills/>}/>
  </Routes>
  
   </>
  );
}

export default App;
