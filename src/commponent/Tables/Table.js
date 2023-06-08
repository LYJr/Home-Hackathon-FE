import "./Table.css"
import { useState } from "react";
import SelectType from "./TableTypeEnum";

function Table() {
    const [col, setCol] = useState(["", "할일", "진행 여부"]); //열 (가로)
    const [rowSize, setRowSize] = useState(0); //행 (세로)
    const [tableBox, setTableBox] = useState([]);

    const handleSetCol = (value) => {
        let copy = [...col]
        copy[col.length] = value;
        setCol(copy);
        
        let copyTableBox = [...tableBox]
        copyTableBox.forEach(box => {
            box.push(createTableBox());
        });
    }

    const handleDeleteCol = () => {
        let copy = [...col]
        copy.length = copy.length-1;
        setCol(copy)

        let copyTableBox = [...tableBox]
        copyTableBox.forEach(box => {
            box.length = box.length-1;
        });
    }

    const handleSetRowSize = (size) => {
        setRowSize(rowSize + size);
        tableBox.push(initTableBox(col.length));
        setTableBox(tableBox);
        console.log(tableBox);
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
                {tableBox.map((obj) => {
                    return (
                        <tr>
                            {obj}
                        </tr>
                    )
                })}
            </tbody>
                <div>
                    <button value="row" onClick={() => handleSetRowSize(1)}> + </button>
                </div>
            </table>
        </>
    )
}

//하나의 열 생성
function initTableBox(colSize) {
    let box = [];

    for (let i = 0; i < colSize-1; i++) {
        if(i === 0) {
            box.push(<td><input type = "checkbox"></input> </td>);
        }
        box.push(<td><input type = "text"></input></td>);
        
    }
    return box;
}

//단일 칸 생성
function createTableBox() {
    return <td><input type = "text"></input></td>;
}

export default Table;