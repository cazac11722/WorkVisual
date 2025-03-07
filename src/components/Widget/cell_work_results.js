import { useCallback, useEffect, useState } from "react"
import { useForm } from "../../contexts/hooks/useForm";

const CellWorkResults = ({ col, data, setData, colIndex, handleEdit }) => {
    const [progress, setProgress] = useState(data.worker || '');

    

    const handleChange = (e) => {
        setProgress(e.target.value);
        data.worker = e.target.value;
        handleEdit(data.id, 'worker', data.worker)
    }

    return (
        <select
            value={progress}
            onChange={(e) => handleChange(e)}
            className="text-sm w-32 bg-transparent">
            <option value={1}>작업 중</option>
            <option value={2}>대기</option>
            <option value={3}>오류</option>
            <option value={4}>완료</option>
        </select>
    )
}

export default CellWorkResults;