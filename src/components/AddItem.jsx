import AddIcon from "../../public/icons/ic--baseline-library-add";
import { useState } from 'react'
import axios from 'axios'

const AddItem = () => {

    const [taskItem, setTaskItem] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('low');
    const [status, setStatus] = useState('backlog');

    const [ tasks, setTasks ] = useState([])

    const postTask = async () => {
        try {
        const task = { taskItem, dueDate, priority, status };
        console.log(task)
        const response = await axios.post('http://localhost:3000/add-task', task);
        console.log('Task posted:', response.data);
        setTasks(prevTasks => [...prevTasks, response.data]);

        // Clear user input field
        setTaskItem('');
        setDueDate('');
        setPriority('low');
        setStatus('backlog');

        } catch (error) {
        console.error('Failed to post task:', error);
        }
    };



    return (
                <div className="taskView grid grid-rows-1 grid-cols-12 border pl-1 bg-black/80 p-1 space-x-1 rounded-md">
                    <input
                        type='text'
                        className="col-span-7 border-r pl-2"
                        placeholder='Add a task'
                        value={taskItem}
                        onChange={(e) => setTaskItem(e.target.value)} />

                    <input
                        type="date"
                        className="col-span-2 border-r pl-2"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}/>

                    <select
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        >
                        <option value="low" selected>Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>

                    <select
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        >
                        <option value="backlog" selected>Backlog</option>
                        <option value="started">Started</option>
                        <option value="testing">Testing</option>
                        <option value="completed">Completed</option>
                    </select>

                    <div className="addIcon flex justify-center items-center">
                        <div className="icon cursor-pointer invert" onClick={postTask}>
                            <AddIcon/>
                        </div>
                    </div>

                </div>

    )
}

export default AddItem;