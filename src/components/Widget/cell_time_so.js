import React, { useEffect, useState } from "react";

const CellTimeSo = ({ data }) => {
    const [timeDiff, setTimeDiff] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        if (data.startTime && data.endTime) {
            const start_date = new Date(data.startTime);
            const end_date = new Date(data.endTime);
            const diff = end_date - start_date;

            const hours = Math.floor(diff / 3600000); // converting milliseconds to hours
            const minutes = Math.floor((diff % 3600000) / 60000); // converting remainder to minutes
            const seconds = Math.floor((diff % 60000) / 1000); // converting remainder to seconds

            setTimeDiff({ hours, minutes, seconds });
        }
    }, [data.startTime, data.endTime]);

    return (
        <div>
            {data.endTime ? (
                <span>{timeDiff.hours}시 {timeDiff.minutes}분 {timeDiff.seconds}초</span>
            ) : (
                <span>시간 정보 없음</span>
            )}
        </div>
    );
}

export default CellTimeSo;
