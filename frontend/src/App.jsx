import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './navbar'
import Home from './components/Home'
import Profile from './components/Profile';
import ViewPost from './components/ViewPost';
import MyPosts from './components/MyPosts';
import About from './components/About';
import Contact from './components/Contact';
import CreatePost from './components/CreatePosts';
import Login from './components/Login';
import Signup from './components/Singup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Profile/>
        </div>
        <div className='col-8'>
          <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/Posts" element={<MyPosts/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/newpost" element={<CreatePost/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>
        </div>
      </div>
    </div>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
