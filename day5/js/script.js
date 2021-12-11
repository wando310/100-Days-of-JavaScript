/*

    Conditions
        First Step -> Definition of variable
        Second Step -> Creation of validation using conditions
        Third Step -> the result must go through each of the conditions to check what was the value entered and return the answer in the console
*/ 
var trafficLight = 'verde' //
var message = ''

if (trafficLight == 'verde') {
    message = 'Pode passar'
    
}

else if (trafficLight == 'amarelo'){
    message = 'Atenção'
    
}

else if  (trafficLight == 'vermelho'){
    message = 'Pare!'
    
}

else {
    message = 'Esse sinal não existe no momento tente novamente ;)'
}

console.log('Faça a troca do valor da variável através do código fonte e o veja funcionar :D')

console.log(message)