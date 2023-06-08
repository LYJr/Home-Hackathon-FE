import "./Table.css"
import { useState } from "react";
import SelectType from "./TableTypeEnum";

function Table() {
    const [col, setCol] = useState(["", "할일", "진행 여부"]); //열 (가로)
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

        // let copyTableBox = [...tableBox]
        // copyTableBox.forEach(box => {
        //     box.length = box.length-1;
        // });
    }

    const handleSetRowSize = (size) => {
        let copy = rowSize;
        setRowSize(copy + size);        
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
                {gredTableBox(col, rowSize).map((item) => {
                    return (
                        <tr>
                            {item}
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

function gredTableBox(col, rowSize) {
    let boxs = [];

    for (let r = 0; r < rowSize; r++) {
        let itemTag = [];

        for (let c = 0; c < col.length; c++) {
            if(col[c] === "") {
                console.log("진입?")
                itemTag[c] = SelectType("CHACK_BOX");
                continue;
            }
            itemTag[c] = SelectType("TEXT");       
        }
        boxs[r] = itemTag;
    }

    return boxs;
}

export default Table;