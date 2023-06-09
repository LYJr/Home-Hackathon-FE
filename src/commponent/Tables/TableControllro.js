function CreateTableBodyRow(row, setRow, col, rowIndex) {
    let copyCol = [...col];
    let copyRow = [...row];

    let rows= [];

    for (let i = 0; i < copyCol.length; i++) {
        if(i === 0) {
            rows[i] = <td><input type ="checkbox" ></input></td>;
            continue;
        }
        rows[i] = <td><input type = "text"></input></td>;
    }
    return rows
}

function CreateTableHeaderRow(name, col, setCol, index) {
    let copyCol = [...col];

    if(index === 0) {
        return
    }

    return (
            <input type = "text" value={copyCol[index]}
                onChange={(e) => {
                    copyCol[index] = e.target.value;
                    setCol(copyCol);
                }}>
            </input> 
    );
}


export {CreateTableBodyRow, CreateTableHeaderRow};