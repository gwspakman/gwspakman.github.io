function getAndPrintValue(inputId) {
    value1 = getValue(inputId)

    showPanel("field_name", value1)
}

function getValue(elementId) {
    value1 = document.getElementById(elementId).value

    return Number(value1)
}

function showPanel(fieldName, value1) {
    var fieldNameElement = document.getElementById(fieldName);

    fieldNameElement.innerHTML = "You entered: " + String(value1)
}