// hooks/useTable.js
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";

class TableManager {
    constructor(data, setData, columns, setColumns) {

        this.data = data;
        this.setData = setData;

        this.columns = columns;
        this.setColumns = setColumns;

        this.draggableColumns = ["*"];

        this.init = Init(this);
        this.draggedColumnController = DraggedColumnController(this);
        this.optionController = OptionController(this);
        this.filterController = FilterController(this);
        this.selectedRowsController = SelectedRowsController(this);
        this.sortController = SortController(this);

        // 🔹 이벤트 리스너 통합 관리
        this.globalEventListener = UseGlobalEventListener(this);

    }
}

export const useTable = (data, setData, columns, setColumns) => {

    return new TableManager(data, setData, columns, setColumns);
};

const Init = (cle) => {
    // 전화 화면 변수 
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        const mainTable = document.getElementById("FullScreen");
        if (!document.fullscreenElement) {
            if (mainTable.requestFullscreen) {
                mainTable.requestFullscreen();
            } else if (mainTable.mozRequestFullScreen) { // Firefox
                mainTable.mozRequestFullScreen();
            } else if (mainTable.webkitRequestFullscreen) { // Chrome, Safari
                mainTable.webkitRequestFullscreen();
            } else if (mainTable.msRequestFullscreen) { // IE/Edge
                mainTable.msRequestFullscreen();
            }
            setIsFullScreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            setIsFullScreen(false);
        }
    };

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
            workResult: "입력해주세요.",
            taskDescription: "입력해주세요.",
            selection: false,
        };

        cle.setData((prevData) => [...prevData, newRow]);
    };

    // 시작 버튼 클릭 시
    const handleStart = (rowId) => {
        cle.setData((prevData) =>
            prevData.map((row) =>
                row.id === rowId ? { ...row, startTime: new Date(), endTime: null, detailedWorkTime: 0 } : row
            )
        );
    };

    // 종료 버튼 클릭 시
    const handleEnd = (rowId) => {
        cle.setData((prevData) =>
            prevData.map((row) => {
                if (row.id === rowId) {
                    if (!row.startTime) return row; // 시작 시간이 없으면 변경하지 않음
                    const startTime = new Date(row.startTime); // ISO 형식 변환

                    if (isNaN(startTime.getTime())) return row; // 변환 실패 시 처리

                    const endTime = new Date();
                    const diffMs = endTime - startTime; // 밀리초 단위 차이

                    return {
                        ...row,
                        endTime: endTime, // 날짜 + 시간 표시
                        detailedWorkTime: diffMs,
                    };
                }
                return row;
            })
        );
    };

    // 특정 필드 수정 함수
    const handleEdit = (rowId, columnId, value) => {
        cle.setData((prevData) =>
            prevData.map((row) =>
                row.id === rowId ? { ...row, [columnId]: value } : row
            )
        );
    };

    const handleDeleteSelectedRows = () => {
        cle.setData((prevData) => prevData.filter((row) => !row.selection));
    };


    return { isFullScreen: isFullScreen, toggleFullScreen: toggleFullScreen, addWorkLog: addWorkLog, handleStart: handleStart, handleEnd: handleEnd, handleEdit: handleEdit, handleDeleteSelectedRows: handleDeleteSelectedRows }
}

const FilterController = (cle) => {

    // 선택된 필터 행 저장 변수 
    const [filterConfig, setFilterConfig] = useState({ key: null, val: "", isOpen: false, offset: { x: 0, y: 0 } });

    const filterRef = useRef(null)

    const toggleIs = (e, isOpen) => {

        setFilterConfig({ key: null, val: "", isOpen: isOpen, offset: { x: e.currentTarget.offsetLeft, y: e.currentTarget.offsetTop + 37 } })
    }



    return { config: filterConfig, setConfig: setFilterConfig, filterRef: filterRef, toggleIs: toggleIs }
}

const SelectedRowsController = (cle) => {
    const [allIs, setAllIs] = useState(false);

    // 전체 선택/해제
    const toggleAllRowsSelection = (is) => {
        cle.setData((prev) => {
            prev = prev.map((pv) => {
                return ({ ...pv, selection: is })
            })
            return [...prev]
        });

    };

    // 체크박스 개별 선택
    const toggleRowSelection = (rowId) => {
        cle.setData((prev) => {
            prev = prev.map((pv) => {
                if (pv.id == rowId) {
                    return ({ ...pv, selection: !pv.selection })
                }
                return ({ ...pv })
            })
            return [...prev]
        });
    };

    useEffect(() => {
        if (allIs) {
            document.querySelector("#Allchk > svg").classList.remove('hidden')
        } else {
            document.querySelector("#Allchk > svg").classList.add('hidden')
        }
    }, [allIs])

    return { allIs: allIs, setAllIs: setAllIs, toggleRowSelection: toggleRowSelection, toggleAllRowsSelection: toggleAllRowsSelection }
}

const OptionController = (cle) => {
    const [optionBox, setOptionBox] = useState({ isOpen: false, offset: { x: 0, y: 0 }, column: null });
    const optionBoxRef = useRef(null);

    // // 헤더 클릭 시 옵션 박스 열기
    const handleHeaderClick = (e, column) => {
        if (column.accessorKey === 'select') return;
        const rect = e.currentTarget.getBoundingClientRect();

        setOptionBox({
            isOpen: true,
            offset: { x: rect.x - 300, y: 37 },
            column,
        });
    };

    // // 열 숨기기 토글
    const toggleColumnVisibility = (accessorKey) => {
        setOptionBox((prev) => ({ ...prev, isOpen: false }));
        cle.setColumns((prev) => (
            prev.filter((col) => col.accessorKey !== accessorKey)
        ));
    };

    // Header 수정
    const updateHeader = (accessorKey, newHeader) => {
        cle.setColumns((prevColumns) =>
            prevColumns.map((col, i) => (col.accessorKey === accessorKey ? { ...col, header: newHeader } : col))
        );
    };

    return { config: optionBox, optionBoxRef: optionBoxRef, setConfig: setOptionBox, handleHeaderClick: handleHeaderClick, toggleColumnVisibility: toggleColumnVisibility, updateHeader: updateHeader }
}

const SortController = (cle) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });


    // 정렬 함수
    const handleSort = (accessorKey) => {
        setSortConfig((prev) => {
            const isAscending = prev.key === accessorKey && prev.direction === "asc";
            return { key: accessorKey, direction: isAscending ? "desc" : "asc" };
        });
        cle.setData((prevData) => {
            return [...prevData].sort((a, b) => {
                if (a[accessorKey] < b[accessorKey]) return sortConfig.direction === "asc" ? -1 : 1;
                if (a[accessorKey] > b[accessorKey]) return sortConfig.direction === "asc" ? 1 : -1;
                return 0;
            });
        });
    };

    return { config: sortConfig, setConfig: setSortConfig, handleSort: handleSort }
}

const DraggedColumnController = (cle) => {
    const [draggedColumn, setDraggedColumn] = useState(null);

    // 드래그 시작
    const handleDragStart = (index, e) => {
        setDraggedColumn(index);
    };

    // // 🔹 드래그 중 (기본 동작 방지)
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // 🔹 드롭 이벤트 처리
    const handleDrop = (index) => {
        if (draggedColumn === null || draggedColumn === index) return;

        const fromColumn = cle.columns[draggedColumn];
        const toColumn = cle.columns[index];

        // ✅ 모든 컬럼이 이동 가능하거나 특정 컬럼만 이동 가능하도록 설정
        const canDrag = cle.draggableColumns.includes("*") || cle.draggableColumns.includes(fromColumn.accessorKey);
        const canDrop = cle.draggableColumns.includes("*") || cle.draggableColumns.includes(toColumn.accessorKey);

        if (canDrag && canDrop) {
            const newColumns = [...cle.columns];
            const movedColumn = newColumns.splice(draggedColumn, 1)[0]; // 드래그한 컬럼 제거
            newColumns.splice(index, 0, movedColumn); // 새로운 위치에 추가
            cle.setColumns(newColumns);
        }
        setDraggedColumn(null);
    };

    return { config: draggedColumn, setConfig: setDraggedColumn, handleDragStart: handleDragStart, handleDragOver: handleDragOver, handleDrop: handleDrop }
}

// ✅ 전체 이벤트 리스너 관리
const UseGlobalEventListener = (cle) => {

    const handleClickOutside = (event) => {
        if (
            cle.optionController.optionBoxRef.current && !cle.optionController.optionBoxRef.current.contains(event.target)
        ) {
            cle.optionController.setConfig((prev) => ({ ...prev, isOpen: false }));
        }
        if (
            cle.filterController.filterRef.current && !cle.filterController.filterRef.current.contains(event.target)
        ) {
            cle.filterController.setConfig({ key: null, val: "", isOpen: false, offset: { x: 0, y: 0 } });
        }
    };

    return { handleClickOutside: handleClickOutside }

};
