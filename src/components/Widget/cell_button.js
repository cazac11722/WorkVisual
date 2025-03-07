import { useCallback, useEffect, useState } from "react"
import { useForm } from "../../contexts/hooks/useForm";

const CellButton = ({ col, data, setData, colIndex, startBtn, endBtn }) => {
    const [progress, setProgress] = useState(data.worker || '');

    const handleChange = (e) => {
        setProgress(e.target.value);
        data.worker = e.target.value;
    }

    return (
        <div>
            <button type="button" onClick={() => startBtn(data.id)} className="Btn_Tiem_Start bg-green-500 text-white px-2 py-1 mr-2 rounded text-sm">시작</button>
            <button type="button" onClick={() => endBtn(data.id)} className="Btn_Tiem_End bg-red-500 text-white px-2 py-1 rounded text-sm">종료</button>
        </div>
    )
}

export default CellButton;