import "./Table.css"
import { useState } from "react";
import {CreateTableBodyRow, CreateTableHeaderRow} from "./TableControllro";

function Table() {
    const [col, setCol] = useState([null, "할일", "진행 여부"]); //열 (가로)
    const [row, setRow] = useState([]); //행 (세로)

    const handleSetCol = (value) => {
        let copy = [...col]
        let copyRow = [...row]
        copy[col.length] = value;
        setCol(copy);

        copyRow.forEach(row => {
            row.push("")
        });

        setRow(copyRow);
    }

    const handleDeleteCol = () => {
        let copy = [...col]
        let copyRow = [...row]
        copy.length = copy.length-1;

        copyRow.forEach(item => {
            if(item.length === col.length ) {
                item.length = item.length-1;
            }
        });
        setCol(copy)
    }

    const handleSetRow = () => {
        let copy = [...row];
        let createRow = new Array(col.length);
        copy.push(createRow)

        setRow(copy);
    }

    const handleDeleteRow = () => {
        let copy = [...row];
        copy.pop();
        setRow(copy);
    }


    return (
        <>
        <div> {JSON.stringify(row)} </div>
        <table id="todoTable">
            <thead className="tHead">
                {GreadTableHeader(col, setCol).map((item) => {
                    return (
                        <th>
                            {item}
                        </th>
                    )
                })}
                <div>
                    <button value="createCol" onClick={() => handleSetCol()}> + </button>
                    <button value="deleteCol" onClick={() => handleDeleteCol()}> - </button>
                </div>
            </thead>
            <tbody className="tBody">  
                {GredTableBody(row, setRow, col).map((item) => {
                    return (
                        <tr>
                            {item}
                        </tr>
                    )
                })}
            </tbody>
                <div>
                    <button value="createRow" onClick={() => handleSetRow()}> + </button>
                    <button value="deleteRow" onClick={() => handleDeleteRow()}> - </button>
                </div>
            </table>
        </>
    )
}


function GreadTableHeader(col, setCol) {
    let header = []

    for (let i = 0; i < col.length; i++) {
        header[i] =  CreateTableHeaderRow("thead"+i, col, setCol, i);        
    }

    return header;
}


function GredTableBody(row, setRow, col) {
    let body = [];

    for (let r = 0; r < row.length; r++) {
        body.push(CreateTableBodyRow(row, setRow, col, r));
    }
    return body;
}

export default Table;