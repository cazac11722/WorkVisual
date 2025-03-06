import { useState } from "react"

const CellDate = ({ col, data, setData, colIndex, handleEdit }) => {
    const [date, setDate] = useState(data.date[col.accessorKey] || '');

    const handleChange = (e) => {
        setDate(e.target.value);
    }

    const handleKeyUp = (e) => {
        data.date[col.accessorKey] = e.target.value;
        handleEdit(data.id, 'date', data.date)
    }
    return (
        <input type="date" value={date} onChange={(e) => handleChange(e)} onBlur={(e) => handleKeyUp(e)} className="p-2 bg-transparent" />
    )
}

export default CellDate;