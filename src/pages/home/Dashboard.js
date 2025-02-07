import React, { useState } from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { utils, writeFile } from "xlsx";
import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';
import { v4 as uuidv4 } from 'uuid';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState({}); // 선택된 행 저장


  // 업무 추가 함수
  const addWorkLog = () => {
    const newRow = {
      id: uuidv4(),
      date: new Date().toISOString().slice(0, 10),
      startTime: null,
      endTime: null,
      detailedWorkTime: 0,
      worker: "",
      workId: uuidv4().slice(0, 5),
      workResult: "",
      taskDescription: "",
    };

    setData((prevData) => [...prevData, newRow]);
    setSelectedRows((prev) => ({ ...prev, [newRow.id]: false })); // 새로운 행은 체크되지 않음
  };

  // 특정 필드 수정 함수
  const handleEdit = (rowIndex, columnId, value) => {
    setData((prevData) =>
      prevData.map((row, index) =>
        index === rowIndex ? { ...row, [columnId]: value } : row
      )
    );
  };

  // 시작 버튼 클릭 시
  const handleStart = (rowId) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === rowId ? { ...row, startTime: new Date().toLocaleTimeString(), endTime: null } : row
      )
    );
  };

  // 종료 버튼 클릭 시
  const handleEnd = (rowId) => {
    setData((prevData) =>
      prevData.map((row) => {
        if (row.id === rowId) {
          const formatDt = row.startTime.replace(/[가-핳]/g, '') //  HH:mm 으로 변환
          const startTime = row.startTime ? new Date(`1970-01-01 ${formatDt}`) : null;
          if (!startTime) return row;
          const endTime = new Date();

          const workDuration = (endTime - startTime) / (1000 * 60); // 분 단위
          console.log(formatDt);
          return {
            ...row,
            endTime: endTime.toLocaleTimeString(),
            detailedWorkTime: workDuration.toFixed(2) + "분",
          };
        }
        return row;
      })
    );
  };

  // 체크박스 개별 선택
  const toggleRowSelection = (rowId) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  // 전체 선택/해제
  const toggleAllRowsSelection = () => {
    const allSelected = Object.values(selectedRows).every(Boolean);
    const newSelection = {};
    data.forEach((row) => {
      newSelection[row.id] = !allSelected;
    });
    setSelectedRows(newSelection);
  };

  const columns = [
    {
      accessorKey: "select",
      header: (
        <input
          type="checkbox"
          checked={Object.values(selectedRows).every(Boolean) && data.length > 0}
          onChange={toggleAllRowsSelection}
          className="w-4 h-4"
        />
      ),
      cell: ({ row }) =>
      row ? (
        <input
          type="checkbox"
          checked={!!selectedRows[row.id]}
          onChange={() => toggleRowSelection(row.id)}
          className="w-4 h-4"
        />
      ) : null,
    },
    { accessorKey: "date", header: "날짜" },
    { accessorKey: "startTime", header: "시작 시간" },
    { accessorKey: "endTime", header: "종료 시간" },
    { accessorKey: "detailedWorkTime", header: "세부 작업시간 (분)" },
    {
      accessorKey: "worker",
      header: "진행자",
      cell: ({ row }) =>
        row.original ? (
          <input
            type="text"
            defaultValue={row.original.worker || ""}
            onBlur={(e) => handleEdit(row.index, "worker", e.target.value)}
            className="border px-2 py-1"
          />
        ) : null,
    },
    { accessorKey: "workId", header: "업무 고유번호" },
    {
      accessorKey: "workResult", header: "업무결과", cell: ({ row }) =>
        row.original ? (
          <input
            type="text"
            defaultValue={row.original.workResult || ""}
            onBlur={(e) => handleEdit(row.index, "workResult", e.target.value)}
            className="border px-2 py-1"
          />
        ) : null,
    },
    {
      accessorKey: "taskDescription", header: "업무 내용", cell: ({ row }) =>
        row.original ? (
          <input
            type="text"
            defaultValue={row.original.taskDescription || ""}
            onBlur={(e) => handleEdit(row.index, "taskDescription", e.target.value)}
            className="border px-2 py-1"
          />
        ) : null,
    },
    {
      header: "액션",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button onClick={() => handleStart(row.id)} className="bg-green-500 text-white px-2 py-1 rounded">시작</button>
          <button onClick={() => handleEnd(row.id)} className="bg-red-500 text-white px-2 py-1 rounded">종료</button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
          <main>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
              <div className="w-full mb-1">
                <div className="mb-4">
                  <nav className="flex mb-5">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">프로젝트1</h1>
                  </nav>
                </div>
                <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                      <input type="text" name="email" id="products-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search for products" />
                    </div>
                    <div className="flex items-center w-full sm:justify-end">
                      <div className="flex pl-2 space-x-1">
                        <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <button onClick={addWorkLog} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">업무 추가</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden shadow">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          {columns.map((col, i) => (
                            <th key={i} scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">{col.header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        {data.length > 0 ? (
                          data.map((row, rowIndex) => (
                            <tr key={row.id} className="border hover:bg-gray-100 dark:hover:bg-gray-700">
                              {columns.map((col, colIndex) => (
                                <td key={colIndex} className="border p-2">
                                  <div className="text-base font-semibold text-gray-900 dark:text-white">{col.cell ? col.cell({ row, rowIndex }) : row[col.accessorKey]}</div>
                                </td>
                              ))}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={columns.length} className="text-center p-4">
                              데이터가 없습니다.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
