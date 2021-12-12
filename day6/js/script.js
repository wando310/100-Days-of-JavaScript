var computer = 'connected'
var result = ''

switch (computer) {
    case 'connected':
        result = 'Everything ok! Computer turned on'
        break 
    case 'disconnected': 
        result = 'Wait! Your Computer is turned off'
        break
    
    default:
        result = "What's happened with your computer? :( "
}

console.log(result)