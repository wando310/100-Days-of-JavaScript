var average = 0 

const RESULT = document.getElementById("resultOfNote");

function result(n1, n2) {
    var n1 = window.prompt('Qual é a sua primeira nota? ')
    var n2 = window.prompt('Qual é a sua segunda nota? ')

    var average = (n1 + n2)/2 

    if (average >= 6) {
        msg = 'Parabéns'
    }

    else {
        msg = 'Você precisa estudar mais'
    }

    let res = document.getElementById('resultOfNote')
    RESULT.innerHTML += `<p>As notas obtidas foram <span>${n1} e ${n2}</span>.</p>` 
    RESULT.innerHTML += `<p>A média final será <span>${average}</span>.</p>`
    RESULT.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}