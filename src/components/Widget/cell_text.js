import { useState } from "react"

const CellText = ({ col, data, setData, colIndex, handleEdit }) => {
    const [text, setText] = useState(data.text[col.accessorKey] || '');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleKeyUp = (e) => {
        data.text[col.accessorKey] = e.target.value;
        handleEdit(data.id, 'text', data.text)
    }
    return (
        <textarea value={text} onChange={(e) => handleChange(e)} onBlur={(e) => handleKeyUp(e)} className="p-2 bg-transparent"></textarea>
    )
}

export default CellText;