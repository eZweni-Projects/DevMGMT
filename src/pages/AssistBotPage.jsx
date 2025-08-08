import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Options from '../components/Options';
import AddIcon from '../../public/icons/ic--baseline-library-add';
import AddItem from '../components/AddItem';
import TaskIcon from '../../public/icons/streamline-flex-color--3d-coordinate-axis';
import AIoptions from '../components/AIoptions';
import AddDocument from '../components/AddDocument';
import AiIcon from '../../public/icons/streamline-flex-color--deepfake-technology-1';

const AssistBot = () => {

const [ tasks, setTasks ] = useState([]);

useEffect(() => {
    axios.get('http://localhost:3000/ai-db')
    .then(res => {
        setTasks(res.data);
    })
    .catch (err => {
        console.error("Failed to Get Tasks Data", err)
    });
}, []);

// Delete AI suggestions
const handleDeleteTask = async (taskId) => {
    try {
        await axios.delete(`http://localhost:3000/delete/${taskId}`);
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
    } catch (error) {
        console.error({ error: "Failed to Delete task (FE)", error})
    }
};

// Update Task Status
const handleUpdateStatus = async (taskId) => {
    try {
        const res = await axios.patch(`http://localhost:3000/updateStatus/${taskId}`)
        console.log(res.data)
        console.log("Update button Clicked")
        
        setTasks(prev => 
            prev.map(task => 
                task.id === taskId ? {...task, status: "backlog"} : task
            )
        );
    } catch (error) {
        console.error("Failed to update Task Status", error)
    }
};


    return (
        <div className="tableView ">
            <Navbar/>


            <div className="TableViewContent ">
                {/* TableView Header */}
                <div className="taskView grid grid-rows-1 grid-cols-12 border-b pl-2 font-bold my-4 mx-8 text-xl">
                    <p className="col-span-7 border-r pl-2">Task</p>
                    <p className="col-span-1 border-r pl-2">Due Date</p>
                    <p className="col-span-1 border-r pl-2">Priority</p>
                    <p className="col-span-1 border-r pl-2">Status</p>
                </div>

                

                {/* TableView Content */}
                {tasks.map((task) => (
                    <div key={task.id}
                        className="taskView grid grid-rows-1 grid-cols-12 border border-black hover:bg-slate-200 pl-2 mb-3 mx-8 rounded items-center">

                        <div className="task col-span-7 border-r p-1 flex items-center space-x-4">
                            <AiIcon/>
                            <p className="">{task.taskItem}</p>
                        </div>

                        <p className="col-span-1 border-r p-1">
                            {new Date(task.dueDate).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                            })} {/* yyyy-mm-dd format */}
                        </p>
                        {/* <p className="col-span-2 border-r p-1">{task.dueDate}</p> */}
                        <p className="col-span-1 border-r p-1">{task.priority}</p>
                        <p className="col-span-1 border-r p-1">{task.status}</p>

                         <div className="options border col-span-2">
                        <AIoptions
                            taskId={task.id}
                            onDelete={handleDeleteTask}
                            onUpdateStatus={handleUpdateStatus}/>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AssistBot;