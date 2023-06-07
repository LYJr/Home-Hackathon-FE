import "./Table.css"
import { useState } from "react";

function Table() {
    const [col, setCol] = useState(["", "숫자", "할일", "비고"]); //열 (가로)
    const [rowSize, setRowSize] = useState(0); //행 (세로)

    const handleSetCol = (value) => {
        let copy = [...col]
        copy[col.length] = value;
        setCol(copy);
    }

    const handleDeleteCol = () => {
        let copy = [...col]
        copy.length = copy.length-1;
        setCol(copy)
    }

    const handleSetRowSize = (size) => {
        let copy = [...col]

        setRowSize(rowSize+size);
    }

    return (
        <>
        <table id="todoTable">
            <thead className="tHead">
                {col.map((item) => {
                    return (
                        <th>{item}</th>
                    )
                })}
                <div>
                    <button value="colCreate" onClick={() => handleSetCol(prompt("버튼값 추가하셈"))}> + </button>
                </div>
                <div>
                    <button value="colDelete" onClick={() => handleDeleteCol()}> - </button>
                </div>
            </thead>
            <tbody className="tBody">
                {initRowTag(col, rowSize)}
            </tbody>
                <div>
                    <button value="row" onClick={() => handleSetRowSize(1)}> + </button>
                </div>
            </table>
        </>
    )
}

function initRowTag(col, rowSize) {
    console.log(col)
    console.log("rowSize: "+rowSize)
    let row = [];
    
    for (let i = 0; i < rowSize; i++) {
        
        for (let r = 0; r < col.length; r++) {

        }
    }

    return (
        <>
            <tr>
                <td><input type = "checkbox"></input> </td>
                <td><input type = "text"></input> </td>
                <td><input type = "text"></input> </td>
                <td><input type = "text" ></input> </td>
            </tr>

            <tr>
                <td><input type = "checkbox"></input> </td>
                <td><input type = "text"></input> </td>
                <td><input type = "text"></input> </td>
                <td><input type = "text"></input> </td>
            </tr>

            <tr>
                <td><input type = "checkbox"></input> </td>
                <td><input type = "text"></input> </td>
                <td><input type = "text"></input> </td>
                <td><input type = "text"></input> </td>
            </tr>
        </>
    )
}

export default Table;

