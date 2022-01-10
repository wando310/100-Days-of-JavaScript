count = 0 

const COUNTER = document.getElementById("numberOfClicks")

function clicks() {
    var x = count ++
    COUNTER.innerHTML = `Seu total de clicks foram <span>${x}</span>`
}

function stop() {
    count = 0 
    COUNTER.innerHTML = null
}