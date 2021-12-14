// AND, OR, NOT

/* 
    AND = &&
    OR = ||
    NOT = ! -> put at the beginning of the variable, it reverse the value, Ex: True - False, False - True

*/

var email = 'testescript@gmail.com'
var password = '1234'

console.log('Altere os dados usando o código fonte')

if (email === 'testescript@gmail.com' && password === 'santo@12_;#$') {
    console.log ('Usuário autenticado')
}

else {
    console.log('E-mail ou senha incorretos, tente novamente.')
}