import MoveToTopButton from './compoenets/MoveToTopButton';
import Pricing from './compoenets/Pricing';


import './App.css'
import Footer from './compoenets/navigation/Footer'
import Login from './compoenets/Login'
import Signup from './compoenets/Signup'
import Home from './compoenets/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Templates from './compoenets/Templates'
import Editor from './compoenets/Editor'
import Navbar from './compoenets/navigation/Navbar'
import ContactUs from './compoenets/contact/ContactUs'
import AboutUs from './compoenets/about-us/AboutUs'






function App() {
 

  return (<>
 
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/templates" element={<Templates/>}/>
  <Route path="/editor/:id" element={<Editor/>}/>
  <Route path="/contact-us" element={<ContactUs/>}/>
  <Route path="/about-us" element={<AboutUs/>}/>
  <Route path="/pricing" element={<Pricing/>}/>
  <Route path="/templates" element={<Templates/>}/>


</Routes>
  <Footer/>
  <MoveToTopButton/>
</BrowserRouter>
  </>
    
  )
}

export default App
