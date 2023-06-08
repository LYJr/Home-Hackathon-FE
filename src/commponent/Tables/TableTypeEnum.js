const type = {
    TEXT : <td><input type = "text"></input></td>,
    CHACK_BOX : <td><input type = "checkbox"></input></td>
} 

Object.freeze(type);

function SelectType (tableType) {
    let value = type.TEXT; 
    if(tableType === "CHACK_BOX") {
        value = type.CHACK_BOX;
    }
    return value;
}

export default SelectType;