import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "../pages/Home"
import Kanban from "../pages/Kanban"
import Backlog from '../pages/Backlog'
import Reports from '../pages/Reports'

import Burgermenu from '../assets/icons/mdi-light--menu'
import Notification from '../assets/icons/mdi-light--bell'
import Settings from '../assets/icons/mdi-light--settings'

const Navbar = () => {
    return (
        <div className="navbar">
            <BrowserRouter>

                {/* Global Navigaion */}
                <nav className='flex p-2 border space-x-4 items-center justify-between'>
                    <p className="logo font-bold text-2xl"> [ DevMGMT ] </p>
                    <Link to="/" className='hover:underline'>Home</Link>
                    <Link to="/kanban">People</Link>
                    <Link to="/Backlog">Teams</Link>
                    <Link to="/Reports">Reports</Link>
                    <Link to="/Reports">Intergrations</Link>

                    <div className="searchbar border border-black p-1">
                        <input type="text" className='border pl-2' placeholder='Search'/>
                    </div>

                    <div className="navIcons flex justify-evenly w-1/4">
                        <div className="navIcon flex flex-col items-center w-1/6 cursor-pointer"><Settings/></div>
                        <div className="navIcon flex flex-col items-center w-1/6 cursor-pointer"><Notification/></div>
                        <div className="navIcon flex flex-col items-center w-1/6 cursor-pointer"><Burgermenu/></div>
                    </div>
                </nav>

                {/* Pagelinks */}
                <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/kanban" element={<Kanban/>} />
                    <Route path="/backlog" element={<Backlog/>} />
                    <Route path="/reports" element={<Reports/>} />
                </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default Navbar;
      