import './App.css';
import {Routes,Route} from "react-router-dom"
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
       <Route   path='/' element={<Home/>}></Route>
       <Route   path='about' element={<About/>}></Route>
       <Route   path='navbar' element={<Navbar/>}></Route>
       <Route   path='skills' element={<Skills/>}></Route>
   </Routes>
  
   </>
  );
}

export default App;
