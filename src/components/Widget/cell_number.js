import { useState } from "react"

const CellNumber = ({ col, data, setData, colIndex, handleEdit }) => {
    const [number, setNumber] = useState(data.number[col.accessorKey] || '');

    const handleChange = (e) => {
        setNumber(e.target.value);
    }

    const handleKeyUp = (e) => {
        data.number[col.accessorKey] = e.target.value;
        handleEdit(data.id, 'number', data.number)
    }
    return (
        <>
            <input type="number" value={number} onChange={(e) => handleChange(e)} onBlur={(e) => handleKeyUp(e)}  className="p-2 bg-transparent" />
        </>
    )
}

export default CellNumber;