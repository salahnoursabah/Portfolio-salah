import About from './components/pages/About/About';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/pages/Contact/Contact'
import Portfolio from './components/pages/Portfolio/Portfolio';
import Nav from './components/pages/Nav/Nav';
import Footer from './components/pages/footer/Footer';
import Blog from './components/pages/Blog/Blog';
import React,{useContext} from "react"
import {ThemeContext}from './components/Context/ThemeContext'




import './App.css';

function App() {
const {theme}= useContext(ThemeContext);
  
  return (


<div className={theme ? 'App light': 'App dark'}>

<Nav/>
  <Routes>
     <Route path="/" element={ <Home/>} />
    <Route path="/Home" element={ <Home/>} />
    <Route path="/Contact" element={ <Contact/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Portfolio" element={<Portfolio/>} />
    <Route path="/Blog" element={<Blog/>} />
  </Routes>
<Footer/>
</div>





  );
}

export default App;
