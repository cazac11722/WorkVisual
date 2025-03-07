import { useCallback, useEffect, useState } from "react"
import { useForm } from "../../contexts/hooks/useForm";

const CellStartEnd = ({ col, data, setData, colIndex, startBtn, endBtn }) => {

    const start_date = new Date(data.startTime) || ''
    const end_date = new Date(data.endTime) || ''

    return (
        <div>
            <span className={`${data.startTime == null ? "hidden" : ""}`}>{start_date.getHours()}시 {start_date.getMinutes()}분 {start_date.getSeconds()}초</span>
            <span className="px-2">~</span>
            <span className={`${data.endTime == null ? "hidden" : ""}`}>{end_date.getHours()}시 {end_date.getMinutes()}분 {end_date.getSeconds()}초</span>
        </div>
    )
}

export default CellStartEnd;