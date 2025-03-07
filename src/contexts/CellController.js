import React, { createContext, useContext, useState } from 'react';
import CellText from '../components/Widget/cell_text';
import CellWorkId from '../components/Widget/cell_work_id';
import CellDate from '../components/Widget/cell_date';
import CellTime from '../components/Widget/cell_time';
import CellWorkResults from '../components/Widget/cell_work_results';
import CellButton from '../components/Widget/cell_button';
import CellStartEnd from '../components/Widget/cell_start_end';
import CellTimeSo from '../components/Widget/cell_time_so';
import CellNumber from '../components/Widget/cell_number';
import CellDateAuto from '../components/Widget/cell_date_auto';

export const CellController = ({ type, col, data, setData, colIndex, handleEdit, startBtn, endBtn }) => {

    let html = '';
    switch (type) {
        case "1":
            html = <CellText col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "2":
            html = <CellNumber col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "3":
            html = <CellDate col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "4":
            html = <CellTime col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "5":
            html = <CellWorkResults col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "6":
            html = <CellText col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "7":
            html = <CellText col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "8":
            html = <CellWorkId col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "9":
            html = <CellButton col={col} data={data} setData={setData} colIndex={colIndex} startBtn={startBtn} endBtn={endBtn} />
            break;
        case "10":
            html = <CellStartEnd col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "11":
            html = <CellTimeSo col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "12":
            html = <CellDateAuto col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
    }

    return html;
};
