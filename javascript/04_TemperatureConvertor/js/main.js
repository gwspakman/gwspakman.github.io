var outputTC = document.getElementById("outputTC")
outputTC.innerHTML = 
    '<table>' +
    '<tr><td>Output TC</td><td> <input type="text" id="textTCIn" name="InputTC" onblur="evalInput()"></input> </td></tr>'+
    '<tr><td>Output TF</td><td> <input type="text" id="textTFIn" name="InputTF" onblur="evalTFIn()"></input> </td></tr>'+
    '</table>'+
    '<input type="text" id="textTCIn" name="InputTC" onblur="evalInput()"></input>'

function evalInput() {
    const strInput = document.getElementById("textTCIn").value
    const TC = Number(strInput)
    const TF = CelciusToFahrenheit(TC)
    console.log('TC =', TC, 'TF =', TF)

    var outputTF = document.getElementById("outputTF")
    outputTF.innerHTML = "Fahrenheit : " + String(TF)

}

function evalTFIn() {
    const strInput = document.getElementById("textTFIn").value
    const TF = Number(strInput)
    const TC = FahrenheitToCelcius(TF)
    //console.log('TC =', TC, 'TF =', TF)

    var outputTC = document.getElementById("outputTC")
    outputTC.innerHTML = "Celcius : " + String(TC)
}

function FahrenheitToCelcius(TF) {
    const TC = (TF - 32) / 1.8
    return TC
}

function CelciusToFahrenheit(TC) {
    const TF = 1.8 * TC + 32
    return TF
}