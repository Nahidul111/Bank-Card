
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueString = inputField.value ;
    const  InputValue = parseFloat(inputValueString);
    inputField.value = '';
    return InputValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValueById(elementId, inputDeposit){
    const element = document.getElementById(elementId);
    element.innerText = inputDeposit;
}