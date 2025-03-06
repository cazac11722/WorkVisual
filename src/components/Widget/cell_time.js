import { useState } from "react"

const CellTime = ({ col, data, setData, colIndex, handleEdit }) => {
    const [time, setTime] = useState(data.time[col.accessorKey] || '');

    const handleChange = (e) => {
        setTime(e.target.value);
    }

    const handleKeyUp = (e) => {
        data.time[col.accessorKey] = e.target.value;
        handleEdit(data.id, 'time', data.time)
    }
    return (
        <input type="time" value={time} onChange={(e) => handleChange(e)} onBlur={(e) => handleKeyUp(e)} className="p-2 bg-transparent" />
    )
}

export default CellTime;