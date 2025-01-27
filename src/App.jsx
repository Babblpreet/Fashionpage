
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/common/Header'
import About from './pages/About'
import Footer from './components/common/Footer'
import MySwiper from './components/myswiper'

function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     {/* <Footer/> */}
     {/* <MySwiper/> */}
     </BrowserRouter>
    </>
  )
}

export default App
