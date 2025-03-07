import { useState } from "react"

const CellDateAuto = ({ col, data, setData, colIndex, handleEdit }) => {
    const [update_date, setUpdate_date] = useState(data.update_date);

    const handleChange = (e) => {
        setUpdate_date(e.target.value);
    }

    const handleKeyUp = (e) => {
        data.update_date = e.target.value;
        handleEdit(data.id, 'update_date', data.update_date)
    }
    return (
        <input type="date" value={update_date} onChange={(e) => handleChange(e)} onBlur={(e) => handleKeyUp(e)} className="p-2 bg-transparent" />
    )
}

export default CellDateAuto;