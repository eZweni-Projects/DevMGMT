import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import Options from './Options';
import TaskIcon from '../../public/icons/streamline-flex-color--3d-coordinate-axis';

const TableView = ( ) => {

const [ tasks, setTasks ] = useState([]);

useEffect(() => {
    axios.get('http://localhost:3000/read-db')
    .then(res => {
        setTasks(res.data);
    })
    .catch (err => {
        console.error("Failed to Get Tasks Data", err)
    });
}, []);


    return (
        <div className="tableView mx-10 my-8 shadow-md border p-4">

            <div className="TableViewContent">
                {/* TableView Header */}
                <div className="taskView grid grid-rows-1 grid-cols-12 border-b pl-2 font-bold my-4 text-xl">
                    <p className="col-span-7 border-r pl-2">Task</p>
                    <p className="col-span-2 border-r pl-2">Due Date</p>
                    <p className="col-span-1 border-r pl-2">Priority</p>
                    <p className="col-span-1 border-r pl-2">Status</p>
                </div>


                {/* TableView Content */}
                {tasks.map((task) => (
                    <div key={task.id}
                        className="taskView grid grid-rows-1 grid-cols-12 border border-black/40 pl-2 mb-3 rounded-md shadow-sm hover:bg-slate-200">
                        <div className="task col-span-7 border-r p-1 flex space-x-4">
                            <TaskIcon/>
                            <p className="">{task.taskItem}</p>
                        </div>
                        <p className="col-span-2 border-r p-1">
                            {new Date(task.dueDate).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                            })} {/* yyyy-mm-dd format */}
                        </p>
                        {/* <p className="col-span-2 border-r p-1">{task.dueDate}</p> */}
                        <p className="col-span-1 border-r p-1">{task.priority}</p>
                        <p className="col-span-1 border-r p-1">{task.status}</p>
                    <div className="options border col-span-1">
                        <Options/>
                    </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default TableView;