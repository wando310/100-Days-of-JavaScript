var avarege = 0 

const SUM = document.getElementById("resultOfSum")

function sum(n1, n2) {
    var n1 = window.prompt('Digite o primeiro número')
    var n2 = window.prompt('Digite o segundo número')

    var avarege = (n1 + n2)

    SUM.innerHTML = (`A soma entre <span>${n1}</span> e <span>${n2}</span> é<span> ${avarege}</span>`)
}