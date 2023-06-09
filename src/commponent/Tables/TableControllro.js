function CreateTableBodyRow(row, setRow, col, rowIndex) {
    let copyCol = [...col];
    let copyRow = [...row];

    let rows= [];
    for (let i = 0; i < copyCol.length; i++) {
        if(i === 0) {
            rows[i] = <td><input type ="checkbox" /> </td>;
            continue;
        }
        rows[i] = <td><input type = "text" value={copyRow[rowIndex][i]} name={"tbody"+(rowIndex+1)+i}></input></td>;
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