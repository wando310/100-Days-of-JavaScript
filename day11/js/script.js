// JavaScript goes into strict mode, avoiding name conflicts
'use strict'

// Global Scope 
var car = 'BMW'

function showCar() {
    //Localcope 
    console.log(car)
}

console.log(car)