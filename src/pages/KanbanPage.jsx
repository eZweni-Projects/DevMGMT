import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from 'axios'
import AddItem from "../components/AddItem";
import Options from "../components/Options";

import RotateIcon from "../../public/icons/streamline-flex-color--3d-rotate-y-axis";
import ReaderIcon from "../../public/icons/streamline-flex-color--pdf-reader-application";
import RoundAnchor from "../../public/icons/streamline-flex-color--round-anchor-point";
import Arrows from "../../public/icons/streamline-flex-color--arrow-roadmap";

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
        <div className="kanban ">
            <Navbar/>
            <AddItem/>
            
            <div className="headers grid grid-cols-4 text-center text-xl font-bold mt-10 gap-8 border border-black p-2 m-2">

                <div className="backlog flex items-center px-5 pb-2 border-b space-x-2">
                    <RoundAnchor/>
                    <h1>Backlog</h1>
                </div>
                <div className="backlog flex items-center px-5 pb-2 border-b space-x-2">
                    <Arrows/>
                    <h1>Started</h1>
                </div>
                <div className="backlog flex items-center px-5 pb-2 border-b space-x-2">
                    <RotateIcon/>
                    <h1>Testing</h1>
                </div>

                <div className="backlog flex items-center px-5 pb-2 border-b space-x-2">
                    <ReaderIcon/>
                    <h1>Completed</h1>
                </div>

               </div>
            <div className="kanban flex min-h-[50vh]">
            

                {/* Filter BACKLOG items only */}
                <div className="status border border-black  w-1/4 py-3">
                
                {tasks
                .filter((task) => task.status === "Backlog")
                .map((task) => (
                    <div
                        key={task.id}
                        className="taskView grid grid-cols-6 grid-rows-1 border border-black rounded-md mb-1 p-1 mx-2"
                        >
                        <div className="taskItem col-span-5">
                            <p className="col-span-6 border-r text-sm">{task.taskItem}</p>
                            <p className="col-span-1 text-xs">Priority: {task.priority}</p>
                        </div>
                        <div className="options col-span-1">
                            <Options/>
                        </div>
                    </div>
                ))}
                </div>

                {/* Filter STARTED items only */}
                <div className="status border border-black w-1/4 py-3">
                
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
                <div className="status border border-black w-1/4 py-3">
                
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
                <div className="status border border-black w-1/4 py-3">
                
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