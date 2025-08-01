import Navbar from "../components/Navbar";

const TableView = () => {
    return (
        <div className="tableView">
            <Navbar/>

            {/* TableView Header */}
            <div className="taskView grid grid-rows-1 grid-cols-12 border-b pl-2">
                <p className="col-span-6 border-r pl-2">Task</p>
                <p className="col-span-2 border-r pl-2">Due Date</p>
                <p className="col-span-2 border-r pl-2">Priority</p>
                <p className="col-span-2 border-r pl-2">Status</p>
            </div>

            {/* TableView Content */}
        </div>
    )
}

export default TableView;