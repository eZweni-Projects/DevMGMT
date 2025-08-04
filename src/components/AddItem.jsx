import AddIcon
 from "../../public/icons/ic--baseline-library-add";
const AddItem = () => {
    return (
                <div className="taskView grid grid-rows-1 grid-cols-12 border pl-1 bg-black/80 p-1 space-x-1 rounded-md">
                    <input type='text' className="col-span-7 border-r pl-2" placeholder='Add a task' />

                    <input type="date" className="col-span-2 border-r pl-2"/>

                    <select
                    class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="low" selected>Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>

                    <select
                    class="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="backlog" selected>Backlog</option>
                        <option value="started">Started</option>
                        <option value="testing">Testing</option>
                        <option value="completed">Completed</option>
                    </select>

                    <div className="addIcon flex justify-center items-center">
                        <div className="icon cursor-pointer invert">
                            <AddIcon/>
                        </div>
                    </div>

                </div>

    )
}

export default AddItem;