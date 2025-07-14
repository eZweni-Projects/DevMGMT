import EyeIcon from "../assets/icons/game-icons--semi-closed-eye";
import PlusSymbol from "../assets/icons/mdi-light--plus";
import TableView from "../components/TableView";

const Home = () => {
    return (
        <div className="homePage grid grid-cols-12">

            <div className="sidebar col-span-1 border p-4 font-bold space-y-1">

                <div className="sidebarElement flex items-center border rounded-md shadow-md py-2">
                    <PlusSymbol/>
                    <p className="cursor-pointer">Task</p>
                </div>
                
                <div className="sidebarElement flex items-center border rounded-md shadow-md py-2">
                    <PlusSymbol/>
                    <p className="cursor-pointer">Doc</p>
                </div>
                
                <div className="views flex items-center border-b py-1">
                    <EyeIcon/>
                    <p className="pl-2 cursor-pointer">Table</p>
                </div>

                <div className="views flex items-center border-b py-2">
                    <EyeIcon/>
                    <p className="pl-2 cursor-pointer">Kanban</p>
                </div>

            </div>

            <div className="sidebar col-span-11 border">
                <TableView/>
            </div>
        </div>
    )
}

export default Home;