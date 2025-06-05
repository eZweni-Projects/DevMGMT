import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import Kanban from "./pages/Kanban"

function App() {
 
  return (
  
      <BrowserRouter>
        <nav className='p-2 border space-x-4'>
          <Link to="/" className='hover:underline'>Home</Link>
          <Link to="kanban">Kanban</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/kanban" element={<Kanban/>} />
          </Routes>
        </main>
      </BrowserRouter>
  )
}

export default App
