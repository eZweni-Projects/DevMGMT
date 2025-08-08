import UploadFileIcon from "../../public/icons/ic--baseline-upload-file"

const AddDocument = () => {
    return (
        <div className="document rounded border-black shadow-md flex items-center cursor-pointer border">
            {/* <div className="upoloadIcon flex w-1/4 justify-center">
            <UploadFileIcon/>
            </div> */}
            {/* <p className="text-2xl font-bold">Use AI😎 to Generate Tasks</p> */}
            {/* <p className="text-2xl font-bold w-1/2">Upload Document or Video Transcript</p> */}

            <div className="upoloadIcon flex justify-center">
            <UploadFileIcon/>
            </div>
        </div>
    )
}

export default AddDocument