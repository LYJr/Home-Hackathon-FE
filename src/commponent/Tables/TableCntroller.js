function CreateTableHeaderRow(col, setCol, index) {
    let copyCol = [...col];

    if(index === 0) {
        return
    }

    return (
        <input type = "text" value={copyCol[index]} 
            name = {"thead"+0+index}
            onChange={(e) => {
                copyCol[index] = e.target.value;
                setCol(copyCol);
            }}>
        </input> 
    );
}

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
                        value={copyRow[rowIndex][0]}
                        onChange={() => {
                            copyRow[rowIndex][0] === false ? copyRow[rowIndex][0] = true : copyRow[rowIndex][0] = false
                            setRow(copyRow);
                        }}  
                        >
                    </input> 
                </td>;
            continue;
        }

        rows[i] = 
            <td>
                <input type = "text" 
                    value={copyRow[rowIndex][i]} 
                    name={"tbody"+(rowIndex+1)+i}
                    onChange={(e) => {
                        copyRow[rowIndex][i] = e.target.value;
                        setRow(copyRow);
                    }}>
                </input>
            </td>;
    }
    return rows
}



export {CreateTableBodyRow, CreateTableHeaderRow};