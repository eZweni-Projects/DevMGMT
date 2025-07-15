const TableView = () => {

    const statusOptions = ["Backlog", "In-progress", "Completed"]

    // Time to deadline to auto change priority
    const priorityOptions = ["Low", "Medium", "High", "Urgent"]

    // const datePicker = [ selectedDate, setSelectedDate] = useState(null)

    return (
        <div className="tableview">

            {/* Task Header */}
            <div className="header border p-1 grid grid-cols-12 grid-rows-1 font-bold">
                <p className="col-span-7">Task</p>
                <p className="col-span-2">Due Date</p>
                <p className="col-span-2">Priority</p>
                <p className="col-span-1">Status</p>
            </div>



            {/* Task Item */}
            <div className="header border p-1 grid grid-cols-12 grid-rows-1 text-sm">
                <p className="col-span-7">Populate SQLite database</p>

                <input type="date" className="col-span-2 border"></input>
                
                <div className="element col-span-2 border">
                    <select className="status p-2 ">
                        {priorityOptions.map((opt, index) => (
                            <option key={index} value={opt}>
                            {opt}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="element col-span-1 border">
                    <select className="status p-2 ">
                        {statusOptions.map((opt, index) => (
                            <option key={index} value={opt.toLowerCase()}>
                            {opt}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TableView