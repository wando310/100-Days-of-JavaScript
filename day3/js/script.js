
/* Arithmetic Operators in JavaScript

    + = Addition
    - = Subtraction
    * Multiplication
    / Division
    % Rest of Division

    Order of execution of arithmetic operators in JavaScript.

    1st Multiplication
    2nd Division
    3rd sum
    4th subtraction

    and to prioritize some operation, use ().


    They are all BINARY arithmetic operators (you need 2 values ​​to execute).

    As unary arithmetic operators (only one is needed).

    Ex: x ++ -> increment plus 1.

    When it is printed through:
        console.log (x++)
    
    The incremented value is not currently printed, and another console.log command must be executed placing the x in parentheses.

    And to print already with the increment value

*/

// Creation of variables to perform arithmetic operations
var note1 = 10, note2 = 3, note3 = 5, note4 = 8

//Var responsible for the grade avereges divided by 4
var average = (note1 + note2 + note3 + note4) /4

console.log('The result of informed avarege is ' + average + ' points')