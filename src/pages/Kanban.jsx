import Navbar from "../components/Navbar";

const Kanban = () => {
    return (
        <div className="kanban">
            <Navbar/>
            <h1>I AM KANBAN</h1>

            
            <div className="kanban flex text-center min-h-[50vh]">
                <div className="status border border-black rounded-md w-1/4 m-2 font-bold py-4">Backlog</div>
                <div className="status border border-black rounded-md w-1/4 m-2 font-bold py-4">Started</div>
                <div className="status border border-black rounded-md w-1/4 m-2 font-bold py-4">Testing</div>
                <div className="status border border-black rounded-md w-1/4 m-2 font-bold py-4">Completed</div>
            </div>
        </div>
    )
}

export default Kanban;