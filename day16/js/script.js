
// New Object 
var people =  {
    name : 'Ana Luisa',
    age : 19, 
    Height : 64.5,
}

// Another new object 
var anyone = {
    age : 25
}

// Increment two objects 
var newValue = Object.assign(people, anyone)
console.log(newValue)


// Enter a new value for the object 
people.name = 'Rafaela'

// Frozen changes 
Object.freeze(people)

console.log(people)

