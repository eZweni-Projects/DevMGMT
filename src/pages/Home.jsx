import Navbar from "../components/Navbar";
import TableView from "../components/TableView";
import KanbanView from "../components/KanbanView";
import AssistBotView from "../components/AssistBotView";
import AddItem from "../components/AddItem";
import AddDocument from "../components/AddDocument";


const Home = () => {
    return (
        <div className="home border space-y-14">
            <Navbar/>

            <div className="addTask grid row-span-1 grid-cols-4 gap-6 p-2 items-center">
                <div className="add col-span-3"><AddItem/></div>
                <div className="add col-span-1"><AddDocument/></div>
                
                
            </div>

            <TableView/>
            <KanbanView/>
            <AssistBotView/>

        </div>
    )
}

export default Home;