import DeleteIcon from "../../public/icons/ic--baseline-delete";
import EditIcon from "../../public/icons/ic--baseline-edit";

const Options = ({ taskId, onDelete }) => {
    return (
        <div className="options flex justify-evenly center items-center pt-1">
            <div className="edit cursor-pointer">
                <EditIcon />
            </div>
            <div
                className="delete cursor-pointer"
                onClick={() => onDelete(taskId)}>
                <DeleteIcon />
            </div>
        </div>
    )
}

export default Options;