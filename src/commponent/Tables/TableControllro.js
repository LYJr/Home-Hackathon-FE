function CreateTableBodyRow(row, setRow, col, rowIndex) {
    let copyCol = [...col];
    let copyRow = [...row];

    let rows= [];
    for (let i = 0; i < copyCol.length; i++) {
        if(i === 0) {
            rows[i] = 
                <td>
                    <input type ="checkbox"  
                        name={"checkbox"+rowIndex}
                        onClick={(e) => {
                            //체크여부를 확인하고 싶음.
                            console.log("뭐 들어오냐 :"+e.getModifierState)
                            copyRow[rowIndex][0] = true;
                            setRow(copyRow)
                        }}>
                    </input> 
                </td>;
            continue;
        }
        rows[i] = 
            <td>
                <input type = "text" 
                    value={copyRow[rowIndex][i]} 
                    name={"tbody"+(rowIndex+1)+i}
                    onClick={(e) => {
                        copyRow[rowIndex][i] = e.target.value;
                        setRow(copyRow);
                    }}>
                </input>
            </td>;
    }
    return rows
}

function CreateTableHeaderRow(col, setCol, index) {
    let copyCol = [...col];

    if(index === 0) {
        return
    }

    return (
            <input type = "text" value={copyCol[index]} name = {"thead"+0+index}
                onChange={(e) => {
                    copyCol[index] = e.target.value;
                    setCol(copyCol);
                }}>
            </input> 
    );
}

export {CreateTableBodyRow, CreateTableHeaderRow};