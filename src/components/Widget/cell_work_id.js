import { useState } from "react"

const CellWorkId = ({ col, data, setData, colIndex, handleEdit }) => {
    const [text, setText] = useState(data.workId || '');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleKeyUp = (e) => {
        data.workId = e.target.value;
        handleEdit(data.id, 'workId', data.workId)
    }
    return (
        <textarea value={text} onChange={(e) => handleChange(e)} onBlur={(e) => handleKeyUp(e)} className="p-2 bg-transparent" ></textarea>
    )
}

export default CellWorkId;