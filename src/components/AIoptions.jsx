import DeleteIcon from "../../public/icons/ic--baseline-delete";
import EditIcon from "../../public/icons/ic--baseline-edit";

const AIoptions = () => {
    return (
        <div className="options flex items-center space-x-2 py-2 px-2">
            <div className="edit cursor-pointer flex border w-1/3 h-1/3 p-1 border-black rounded-md">
                <EditIcon />
                Edit
            </div>
            <div className="accept cursor-pointer flex border w-1/3 h-1/3 p-1 border-black rounded-md">
                <DeleteIcon />
                Accept
            </div>
            <div className="reject cursor-pointer flex border w-1/3 h-1/3 p-1 border-black rounded-md">
                <DeleteIcon />
                Reject
            </div>
        </div>
    )
}

export default AIoptions;