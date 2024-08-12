// // // calculator

// function numbers(){

//     value1 = parseInt(prompt(" enter your first number: "))
//     value2 = parseInt(prompt(" enter your second number: "))

// }

// function addition(){

//     sum = value1 + value2
//     return sum
// }

// function substraction(){

//     remaining = value1 - value2
//     return remaining
// }
// function multipilication(){

//     product = value1 * value2
//     return product
// }
// function divide(){

//     quotient = value1 / value2
//     return quotient
// }


// function calculator(){


//     numbers()
//     operator = prompt(" enter your operation: ")

//     if(operator == "+"){

//         console.log(addition())
//     }
//     else if ( operator == "-"){

//         console.log(substraction())
//     }
//     else if ( operator == "*"){


//         console.log(multipilication())
//     }
//     else if ( operator == "/"){

//         console.log(divide())
//     }



// }


// // ------------------------------------------------------------------------------


// calculator()


// -------------------------------------------------------------------------------------


// calculator one function



function calculator(value1, value2,operator) {



    if (operator == "+") {

        sum = value1 + value2
        console.log(sum)
    }
    else if (operator == "-") {

        remainder = value1 - value2
        console.log(remainder)
    }
    else if (operator == "*") {

        product = value1 * value2
        console.log(product)
    }
    else if (operator == "/") {

        quotient = value1 / value2
        console.log(quotient)
    }

    else (console.log("invalid operation"))



}

value1 = parseInt(prompt("enter the first number : "))
value2 = parseInt(prompt("enter the second number : "))
operator = prompt("enter the operator : ")

calculator(value1,value2,operator)
