function inicio(){
    var nome = window.prompt('Qual é o seu nome?');
    var res = window.document.getElementById('result');
    result.innerHTML = `<p>Olá <span>${nome}</span>! É um grande prazer te conhecer!`
}