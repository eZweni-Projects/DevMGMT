import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar flex border w-full py-4 px-2 justify-between items-center bg-slate-200">
            <div className="logo text-4xl font-bold text-sky-500 flex items-center">[ <p className='text-black/70 text-2xl pt-1'>DevMGMT</p> ]</div>

            <div className="navItems flex space-x-8 pr-8">
                <p className="cursor-pointer font-semibold hover:text-gray-500" onClick={() => navigate("/")}>Home</p>
                <p className="cursor-pointer font-semibold hover:text-gray-500" onClick={() => navigate("/tableView")}>TableView</p>
                <p className="cursor-pointer font-semibold hover:text-gray-500" onClick={() => navigate("/kanban")}>Kanban</p>
                <p className="cursor-pointer font-semibold hover:text-gray-500" onClick={() => navigate("/assistBot")}>Assist-Bot</p>
            </div>
        </div>
    )
}

export default Navbar;