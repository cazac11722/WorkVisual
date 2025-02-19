import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import IconWidget from "../Widget/icon_widget";
import { useState } from "react";
import { onCLS } from "web-vitals";


const ProjectTable = ({ data, setData, columns, setColumns, config }) => {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <TableHeader config={config} />
            <TableFilter filterConfig={config.filterController} />
            <TableBody data={data} columns={columns} config={config} />
            <div onClick={config.init.addWorkLog} className="flex items-center w-full py-2 px-1 text-sm bg-white dark:bg-gray-900 border-y cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" id="option-box">
                <IconWidget icon="Add" className={"text-black w-5 mr-1"} />
                추가
            </div>
        </>
    );
}

export default ProjectTable;

const TableHeader = ({ config }) => {
    return (
        <div className="flex flex-wrap items-center justify-between mb-4 px-1 sm:mb-2 border-b py-2">
            <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                <ul className="flex">
                    <li className="flex mr-4 bg-gray-200 py-1 px-2 rounded-lg cursor-pointer">
                        <IconWidget icon="FactCheck" className="mr-1 w-4" />
                        <span className="text-sm">업무 리스트</span>
                    </li>
                    <li className="flex mr-4 py-1 px-2 rounded-lg cursor-pointer">
                        <IconWidget icon="FactCheck" className="mr-1 w-4" />
                        <span className="text-sm">업무 리스트</span>
                    </li>
                </ul>
            </div>
            <div className="flex items-center sm:justify-end">
                <div className="flex pl-2 space-x-1">
                    <button type="button" onClick={config.init.toggleFullScreen} className="p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <IconWidget icon="Fullscreen" className={"fill-black w-5"} />
                    </button>
                    <button type="button" onClick={config.init.handleDeleteSelectedRows} className="p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <IconWidget icon="Delete" className={"fill-black w-5"} />
                    </button>
                    <button type="button" className="p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <IconWidget icon="Search" className={"fill-black w-5"} />
                    </button>
                    <button type="button" className="p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <IconWidget icon="MoreVert" className={"fill-black w-5"} />
                    </button>
                    <button onClick={config.init.addWorkLog} type="button" className="flex items-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <IconWidget icon="Add" className={"fill-white w-4 mr-1"} />
                        <span className="text-sm">업무 추가</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

const TableFilter = ({ filterConfig }) => {

    const alert = () => {
        return (<div ref={filterConfig.filterRef} className={`absolute rounded-md bg-white dark:bg-gray-900 border shadow-md z-10`} id="option-box"
            style={{
                left: filterConfig.config.offset.x,
                top: filterConfig.config.offset.y,
            }}
        >
            <div className="flex p-2">
                <div>
                    <input type="text" className="border rounded bg-white dark:gb-gray-900 h-[30px] px-2 text-sm " placeholder="기준 필터" />
                </div>
            </div>
            <ul className="p-2">
                <li className="flex items-center px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <div className="icon">
                        <IconWidget icon="FilterList" className="fill-black w-5 mr-1" />
                    </div>
                    <span className="text-sm ">필터</span>
                </li>
            </ul>
        </div>);
    }

    return (
        <div className="flex flex-wrap items-center justify-between mb-4 px-1 relative">
            <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                <ul className="flex">
                    <li className="flex items-center mr-4 bg-gray-200 py-1 px-2 rounded-lg cursor-pointer">
                        <IconWidget icon="FilterList" className="mr-1 w-4 fill-black" />
                        <span className="text-sm">날짜</span>
                        <IconWidget icon="ArrowDown" className="ml-1 w-4 fill-black" />
                    </li>
                    <li className="flex items-center mr-4 py-1 px-2 rounded-lg cursor-pointer  hover:bg-gray-200" onClick={(e) => { filterConfig.toggleIs(e, true) }}>
                        <IconWidget icon="Add" className="mr-1 w-4 fill-black" />
                        <span className="text-sm"> 추가하기</span>
                    </li>
                </ul>
            </div>
            <div className="flex items-center sm:justify-end">
                <ul className="flex">
                    <li className="flex items-center mr-4 py-1 px-2 rounded-lg cursor-pointer hover:bg-gray-200">
                        <span className="text-sm">초기화</span>
                    </li>
                </ul>
            </div>

            {filterConfig.config.isOpen ? alert() : ''}
        </div>
    )
}

const TableBody = ({ data, columns, config }) => {

    const alert = (config) => {


        let option = config.optionController;
        let sort = config.sortController;

        return (
            <div ref={option.optionBoxRef} className="absolute rounded-md bg-white dark:bg-gray-900 border shadow-md z-10" id="option-box"
                style={{
                    left: `${option.config.offset.x}px`,
                    top: `${option.config.offset.y}px`,
                }}>
                <div className="flex p-2">
                    <div className="border mr-1 inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                    </div>
                    <div>
                        <input type="text" className="border rounded bg-white dark:gb-gray-900 h-[30px] px-2 "
                            defaultValue={option.config.column.header}
                            onKeyUp={(e) => config.updateHeader(config.config.column.accessorKey, e.target.value)}
                        />
                    </div>
                </div>
                <ul className="p-2 border-b">
                    <li><div></div><span>속성 편집</span></li>
                </ul>
                <ul className="p-2 border-b">
                    <li
                        onClick={() => sort.handleSort(option.config.column.accessorKey)}
                        className="flex px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <IconWidget icon="SwapVert" className="w-5 mr-1 fill-black" />
                        <span className="text-sm ">오름차순</span>
                    </li>
                    <li
                        onClick={() => sort.handleSort(option.config.column.accessorKey)}
                        className="flex px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <IconWidget icon="SwapVert" className="w-5 mr-1 fill-black" />
                        <span className="text-sm ">오름차순</span>
                    </li>
                    <li className="flex px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <IconWidget icon="FilterList" className="w-5 mr-1 fill-black" />
                        <span className="text-sm ">필터</span>
                    </li>
                </ul>
                <ul className="p-2">
                    <li
                        onClick={() => option.toggleColumnVisibility(option.config.column.accessorKey)}
                        className="px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <label className="w-full flex items-center justify-between cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">열 숨기</span>
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                        </label>
                    </li>
                </ul>
            </div>
        );
    }
    // console.log(config.optionController.config.isOpen)

    const Thead = () => {
        return (
            <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                    {columns.map((col, i) => (
                        <th
                            key={i}
                            onClick={(e) => config.optionController.handleHeaderClick(e, col)}
                            draggable={config.draggableColumns.includes("*") || config.draggableColumns.includes(col.accessorKey)} // ✅ 전체 또는 특정 컬럼만 드래그 가능
                            onDragStart={(e) => (config.draggableColumns.includes("*") || config.draggableColumns.includes(col.accessorKey)) && config.draggedColumnController.handleDragStart(i, e)}
                            onDragOver={config.draggedColumnController.handleDragOver}
                            onDrop={() => (config.draggableColumns.includes("*") || config.draggableColumns.includes(col.accessorKey)) && config.draggedColumnController.handleDrop(i)}
                            style={{ width: col.size }}
                            className={`border p-2 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400 ${config.draggableColumns.includes("*") || config.draggableColumns.includes(col.accessorKey) ? "cursor-move" : ""
                                }`}
                        >
                            {col.header}
                        </th>
                    ))}
                </tr>

            </thead>
        );
    }

    const Tbody = () => {
        return (
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {config.data.length > 0 ? (
                    data.map((row, rowIndex) => (
                        <tr key={row.id} onClick={(e) => {
                            console.log(e)
                        }} className="border hover:bg-gray-100 dark:hover:bg-gray-700">
                            {columns.map((col, colIndex) => (
                                <td
                                    key={colIndex}
                                    style={{ width: col.size }}
                                    className="border  relative"
                                >
                                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                                        {col.cell ? col.cell({ row, rowIndex }) : row[col.accessorKey]}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} className="text-left p-4 bg-white dark:bg-gray-900 dark:text-white">
                            데이터가 없습니다.
                        </td>
                    </tr>
                )}
            </tbody>
        );
    }

    return (<div className="w-full relative" id="mainTable">
        <div className="min-w-full overflow-x-auto">
            <table className="min-w-max divide-y divide-gray-200 table-fixed dark:divide-gray-600 ">
                <Thead />
                <Tbody />
            </table>
            {config.optionController.config.isOpen && alert(config)}
        </div>
    </div>);
}
