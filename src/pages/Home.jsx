import Navbar from "../components/Navbar";
import TableView from "../components/TableView";
import KanbanView from "../components/KanbanView";
import AssistBot from "./AssistBotPage";
import AddItem from "../components/AddItem";
import AddDocument from "../components/AddDocument";


const Home = () => {
    return (
        <div className="home border space-y-14">
            <Navbar/>

            <div className="addTask grid row-span-1 grid-cols-4 gap-6 p-2 items-center">
                <div className="add col-span-4"><AddItem/></div>
                {/* <div className="add col-span-1"><AddDocument/></div> */}
            </div>

            <TableView/>
            <KanbanView/>
            <AssistBot/>

        </div>
    )
}

export default Home;