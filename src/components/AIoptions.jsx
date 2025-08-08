import DeleteIcon from "../../public/icons/ic--baseline-delete";
import EditIcon from "../../public/icons/ic--baseline-edit";

const AIoptions = ({ taskId, onDelete, onUpdateStatus }) => {
    return (
        <div className="options flex items-center justify-between space-x-2 py-2 px-2">
            <div
                className="accept cursor-pointer flex flex-col font-semibold text-sm items-center border w-1/3 shadow py-2  rounded-md bg-green-200"
                onClick={() => onUpdateStatus(taskId)}>
                <DeleteIcon />
                <p>Accept</p>
            </div>
            <div className="edit cursor-pointer flex flex-col font-semibold text-sm items-center border w-1/3 shadow py-2  rounded-md bg-orange-200">
                <EditIcon />
                <p>Modify</p>
            </div>
            <div
                className="reject cursor-pointer flex flex-col font-semibold text-sm items-center border w-1/3 shadow py-2  rounded-md bg-red-200"
                onClick={() => onDelete(taskId)}>
                <DeleteIcon />
                <p>Reject</p>
            </div>
        </div>
    )
}

export default AIoptions;