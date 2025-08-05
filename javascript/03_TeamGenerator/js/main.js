function GenerateTeams()
{
    var nrPlayers = Number(document.getElementById("idNrOfPlayers").value)

    const colors = RandomBooleanArrayDistributed(nrPlayers)
    const totalWhites = SumArray(colors)
    const totalReds = nrPlayers - totalWhites

    let tableRows = ""
    for (i=0 ; i< colors.length; ++i)
    {
        color = colors[i] ? "Wit" : "Rood"

        tableRows += "<tr><td>" + String(i+1) + "</td> <td>" + color + "</td> <td><input type='checkbox' id = 'checkbox'></tr>"
    }
 
    let tableBegin = "<table>"
    let tableEnd = "</table>"
 

    let showCheck = ShowCheck(nrPlayers, totalWhites, totalReds)

    document.getElementById("idNrColor").innerHTML = showCheck + tableBegin + tableRows + tableEnd
}

function ShowCheck(nrPlayers, totalWhites, totalReds){

    str = "<li>Aantal Wit  : " + String(totalWhites) + "</li>" + "<li>Aantal Rood : " + String(totalReds) + "</li>"
    return str
}

function SumArray(ar){
    const l = ar.length

    sm = 0
    for ( i = 0 ; i < ar.length ; ++i)
    {
        sm += ar[i] ? 1 : 0
    }
    return sm
}

function RandomBooleanArrayDistributed(nLength) {

    arrDistributed = []

    const remainder = nLength % 2
    const nMax = (nLength + remainder) / 2
    const nMin = nLength - nMax

    bFound = false
    var i = 0
    while (i < 30 && !bFound){

        arr = RandomBooleanArray(nLength)

        s = SumArray(a)
        if (s <= nMax && s >= nMin) {
            arrDistributed = arr
            bFound = true
        }

        ++i
    }

    return arrDistributed
}

function RandomBooleanArray(nMaxTeamSize) {

    a = []

    for (i = 0; i < nMaxTeamSize; ++i) {
        const r = Math.random()
        a.push(r > 0.5)
    }

    return a
}