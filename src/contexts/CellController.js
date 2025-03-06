import React, { createContext, useContext, useState } from 'react';
import CellText from '../components/Widget/cell_text';
import CellWorkId from '../components/Widget/cell_work_id';
import CellDate from '../components/Widget/cell_date';
import CellTime from '../components/Widget/cell_time';

export const CellController = ({ type, col, data, setData, colIndex, handleEdit }) => {

    let html = '';
    switch (type) {
        case "1":
            html = <CellText col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "2":
            html = <CellText col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "3":
            html = <CellDate col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "4":
            html = <CellTime col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
        case "8":
            html = <CellWorkId col={col} data={data} setData={setData} colIndex={colIndex} handleEdit={handleEdit} />
            break;
    }

    return html;
};
