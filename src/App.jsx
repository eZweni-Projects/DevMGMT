import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TableView from './pages/TableView'
import Kanban from './pages/Kanban'
import AssistBot from './pages/AssistBot'

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Home from "./pages/Home"
// import Kanban from "./pages/Kanban"
// import Backlog from './pages/Backlog'
// import Reports from './pages/Reports'

function App() {
 
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tableView" element={<TableView/>}/>
        <Route path="/kanban" element={<Kanban/>}/>
        <Route path="/assistBot" element={<AssistBot/>}/>
      </Routes>
    </Router>

  )
}

export default App
