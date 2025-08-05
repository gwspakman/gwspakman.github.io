function evalInput(){
    const strMass = document.getElementById('textMassIn').value
    const strLength = document.getElementById('textLengthIn').value
    
    const nrMass = Number(strMass)
    const nrLength = Number(strLength)
    const nrBmi = nrMass / (nrLength/100 * nrLength/100)

    var output = document.getElementById("outputBmi")

    output.innerHTML = "calculated BMI : " + String(nrBmi.toPrecision(3)) + " [kg/m/m]"
}