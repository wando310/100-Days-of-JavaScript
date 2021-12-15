console.log("Acesse o código fonte para interagir com o resultado do código")
var age = 19

/* ternary operators work as a simpler way to perform some sections that would take up more lines of your code.

For exemplo (in portuguese): 

    var age = 20 
    var result = ''

    if (age >= 25) {
        result = "A sua idade está apropriada para dar continuidade no nosso programa"

    else {
        result = "Infelizmente a sua idade não é apropriada para dar continuidade ao nosso programa"
    }
    }

*/
var result = age >= 25 ? 'Confirmado, você tem 25 anos ou mais' : 'A sua idade NÃO é a partir de 25 anos'

console.log(result)