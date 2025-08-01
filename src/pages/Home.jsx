import Navbar from "../components/Navbar";
import TableView from "./TableView";
import Kanban from "./Kanban";
import AssistBot from "./AssistBot";


const Home = () => {
    return (
        <div className="home border">
            <Navbar/>
            <h1>I AM THE HOME PAGE</h1>

                <TableView/>
                <Kanban/>
                <AssistBot/>

        </div>
    )
}

export default Home;