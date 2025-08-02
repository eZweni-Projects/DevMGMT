import Navbar from "../components/Navbar";
import TableView from "../components/TableView";
import KanbanView from "../components/KanbanView";
import AssistBotView from "../components/AssistBotView";


const Home = () => {
    return (
        <div className="home border space-y-5 px-4">
            <Navbar/>
            <TableView/>
            <KanbanView/>
            <AssistBotView/>

        </div>
    )
}

export default Home;