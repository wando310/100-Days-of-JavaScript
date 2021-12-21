// Array Creation
var array = ['BlueBerry', 'Black Grapes', 'Apple', 'Mango', 'Lychee', 'Coconut']


// Looping for length indentify in the array
for (var i = 0; i < array.length; i++) {
    console.log(array[i])
} 
// Return
console.log('O valor deletado foi '+ array.pop())

// Increment of a new value
array.push('Raspberry')
console.log(array)

// Deletion of selected value and number of times
var Del = array.splice(3, 1)
console.log(Del)


// Search for a value and delete
var Index = array.indexOf('Apple')
array.splice(Index, 1)
console.log(array)

