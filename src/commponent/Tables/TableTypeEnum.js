const type = {
    TEXT : <td><input type = "text"></input></td>,
    CHACK_BOX : <td><input type = "checkbox"></input></td>
} 

Object.freeze(type);

function SelectType (tableType) {
    let value = type.TEXT; 
    if(tableType === type.CHACK_BOX.key) {
        value = type.CHACK_BOX;
    }
    return value;
}

export default SelectType;