import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/Header'
import Home from './components/Home'
function App() {

  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}

export default App
