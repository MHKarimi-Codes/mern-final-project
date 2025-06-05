import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './pages/NavigationBar'

function App() {
  return (
    <>
      {/* navebar that appear on the to of the all pages */}
      <Navbar />
      <div className="main-layout">

        {/* route to the home page or main page */}
        <Routes>
          <Route path='/' element={<div id='home'><HomePage /></div>} />
        </Routes>
      </div>
    </>
  )
}

export default App
