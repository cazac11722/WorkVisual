import React, { useState, useRef } from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

const TaskTable = ({ data, columns, setData }) => {
    const tableRef = useRef(null); // 테이블 참조

    const table = useReactTable({
        data,
        columns: columns.map((col) => ({
            ...col,
            cell: (info) => renderCell(info), // 모든 셀에 대해 렌더링 핸들러 추가
        })),
        getCoreRowModel: getCoreRowModel(),
    });

    // 상태 필드의 뱃지 스타일
    const statusBadgeStyles = {
        "In Progress": "badge badge-progress",
        "Completed": "badge badge-completed",
        "Pending": "badge badge-pending",
        "On Hold": "badge badge-hold",
    };

    // 셀 렌더링 핸들러
    const renderCell = (cell) => {
        const { column, row, value } = cell;

        if (column.id === "id") {
            return <div style={{ width: "50px" }}>{row.index + 1}</div>;
        }

        if (column.id === "startTime" || column.id === "endTime") {
            return <>{cell.getValue()}</>;
        }

        if (column.id === "workDetails") {
            return (
                <div
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(row.index, column.id, e.target.textContent)}
                    style={{
                        whiteSpace: "pre-wrap", // 여러 공백 및 줄바꿈 유지
                        width: "300px",
                    }}
                    dangerouslySetInnerHTML={{ __html: cell.getValue() }}
                />
            );
        }

        if (column.id === "status") {
            return (
                <select
                    value={value || "Pending"}
                    onChange={(e) => handleEdit(row.index, column.id, e.target.value)}
                    className={statusBadgeStyles[value] || "badge  bg-primary "}
                >
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="On Hold">On Hold</option>
                </select>
            );
        }

        if (column.id === "event") {
            const rowIndex = row.index;
            const isStarted = !!data[rowIndex].startTime;
            return (
                <button
                    onClick={() => {
                        const updatedData = [...data];
                        if (isStarted) {
                            // 종료 시간 설정
                            updatedData[rowIndex].endTime = new Date()
                                .toLocaleTimeString("en-GB", { hour12: false, timeZone: "Asia/Seoul" }); // hh:mm[:ss[.uuuuuu]]
                        } else {
                            // 시작 시간 설정
                            updatedData[rowIndex].startTime = new Date()
                                .toLocaleTimeString("en-GB", { hour12: false, timeZone: "Asia/Seoul" }); // hh:mm[:ss[.uuuuuu]]
                        }
                        setData(updatedData);
                    }}
                >
                    {isStarted ? "종료" : "시작"}
                </button>
            );
        }

        return (
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleEdit(row.index, column.id, e.target.textContent)}
                style={{
                    whiteSpace: "pre-wrap", // 여러 공백 및 줄바꿈 유지
                    width: "100px"
                }}
                dangerouslySetInnerHTML={{ __html: cell.getValue() }}
            />
        );
    };

    // 데이터 편집 핸들러
    const handleEdit = (rowIndex, columnId, value) => {
        const updatedData = [...data];
        updatedData[rowIndex][columnId] = value;
        setData(updatedData);
    };


    return (
        <div className="task-table-container margin-top">
            <table className="task-table" ref={tableRef}>
                {/* 테이블 헤더 */}
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                {/* 테이블 본문 */}
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell, columnIndex) => (
                                <td
                                    key={cell.id}
                                    id={`cell-${row.index}-${columnIndex}`} // 셀 ID 추가
                                    tabIndex={0} // 포커스를 받을 수 있도록 설정
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;
