import EyeIcon from "../assets/icons/game-icons--semi-closed-eye";
import PlusSymbol from "../assets/icons/mdi-light--plus";

const Home = () => {
    return (
        <div className="homePage grid grid-cols-12">

            <div className="sidebar col-span-2 border p-4 font-bold space-y-6">

                <div className="sidebarElement flex items-center border-b">
                    <PlusSymbol/>
                    <p className="cursor-pointer">New Project</p>
                </div>
                <div className="sidebarElement flex items-center border-b">
                    <PlusSymbol/>
                    <p className="cursor-pointer">New Task</p>
                </div>
                <div className="sidebarElement flex items-center border-b">
                    <PlusSymbol/>
                    <p className="cursor-pointer">New Team</p>
                </div>

                
                <br />

                <div className="views flex items-center border-b py-1">
                    <EyeIcon/>
                    <p className="pl-2 cursor-pointer">Roadmaps</p>
                </div>
                <div className="views flex items-center border-b py-2">
                    <EyeIcon/>
                    <p className="pl-2 cursor-pointer">Kanban</p>
                </div>
                <div className="views flex items-center border-b py-2">
                    <EyeIcon/>
                    <p className="pl-2 cursor-pointer">Calendar</p>
                </div>
            </div>

            <div className="sidebar col-span-10 border">
                THIS SECTION CAN SHOW METRICS / UPDATES  OR REPORTS
            </div>
        </div>
    )
}

export default Home;