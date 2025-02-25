function getInputById(id){
    const value = document.getElementById(id).value;
    const convertValue = parseInt(value);
    return convertValue;
}

function getInputInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertValue = parseInt(value);
    return convertValue;
}

function setInnerTextByValue(id,value){
    document.getElementById(id).innerText = value;
}

function doToggle(id,value){
    document.getElementById(id).style.display = value;
}