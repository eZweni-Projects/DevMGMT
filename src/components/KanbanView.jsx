import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from 'axios'

const KanbanView = () => {

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
        <div className="kanban border-black border-t-2">
            
            <div className="headers grid grid-cols-4 text-xl font-bold ">
                <h1 className="border border-x-black pl-6 py-2">Backlog</h1>
                <h1 className="border border-x-black pl-6 py-2">Started</h1>
                <h1 className="border border-x-black pl-6 py-2">Testing</h1>
                <h1 className="border border-x-black pl-6 py-2">Completed</h1>
               </div>
            <div className="kanban flex min-h-[50vh]">
            


                {/* Filter BACKLOG items only */}
                <div className="status border border-x-black border-y-transparent w-1/4 py-3">
                
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

export default KanbanView;