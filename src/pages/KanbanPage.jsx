import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from 'axios'

const Kanban = () => {

    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/read-db')
        .then(res => {
            setTasks(res.data);
        })
        .catch (err => {
            console.error("Failed to Get Status Data", err)
        });
    }, []);



    return (
        <div className="kanban">
            <Navbar/>
            
            <div className="headers grid grid-cols-4 text-center text-xl font-bold my-4">
                <h1>Backlog</h1>
                <h1>Started</h1>
                <h1>Testing</h1>
                <h1>Completed</h1>
               </div>
            <div className="kanban flex min-h-[50vh]">
            


                {/* Filter BACKLOG items only */}
                <div className="status border border-r-black border-y-transparent w-1/4 py-3">
                
                {tasks
                .filter((task) => task.status === "Backlog")
                .map((task) => (
                    <div
                    key={task.id}
                    className="taskView grid grid-rows-1 border border-black rounded-md mb-1 p-1 mx-2"
                    >
                    <p className="col-span-6 border-r text-sm">{task.taskItem}</p>
                    <p className="col-span-1 text-xs">Priority: {task.priority}</p>
                    </div>
                ))}
                </div>

                {/* Filter STARTED items only */}
                <div className="status border border-x-black border-y-transparent w-1/4 py-3">
                
                {tasks
                .filter((task) => task.status === "Started")
                .map((task) => (
                    <div
                    key={task.id}
                    className="taskView grid grid-rows-1 border border-black rounded-md mb-1 p-1 mx-2"
                    >
                    <p className="col-span-6 border-r text-sm">{task.taskItem}</p>
                    <p className="col-span-1 text-xs">Priority: {task.priority}</p>
                    </div>
                ))}
                </div>

                {/* Filter TESTING items only */}
                <div className="status border border-x-black border-y-transparent w-1/4 py-3">
                
                {tasks
                .filter((task) => task.status === "Testing")
                .map((task) => (
                    <div
                    key={task.id}
                    className="taskView grid grid-rows-1 border border-black rounded-md mb-1 p-1 mx-2"
                    >
                    <p className="col-span-6 border-r text-sm">{task.taskItem}</p>
                    <p className="col-span-1 text-xs">Priority: {task.priority}</p>
                    </div>
                ))}
                </div>

                {/* Filter COMPLETED items only */}
                <div className="status border border-x-black border-y-transparent w-1/4 py-3">
                
                {tasks
                .filter((task) => task.status === "Completed")
                .map((task) => (
                    <div
                    key={task.id}
                    className="taskView grid grid-rows-1 border border-black rounded-md mb-1 p-1 mx-2"
                    >
                    <p className="col-span-6 border-r text-sm">{task.taskItem}</p>
                    <p className="col-span-1 text-xs">Priority: {task.priority}</p>
                    </div>
                ))}
                </div>


            </div>

            {/* TableView Content */}
        </div>
    )
}

export default Kanban;