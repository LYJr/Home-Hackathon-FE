function CreateTableBody(row, setRow, col, index) {

    
}

function CreateTableHeader(name, col, setCol, index) {
    const copy = [...col];

    if(index === 0) {
        return <td></td>
    }

    return (
        <td>
            <input type = "text" value={copy[index]} name= {name} 
                onChange={(e) => {
                    copy[index] = e.target.value;
                    setCol(copy);
                }}>
            </input> 
        </td>
    );
}


export {CreateTableBody, CreateTableHeader};