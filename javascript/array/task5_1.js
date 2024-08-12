let arr = []
let limit = 11

// loop for generating 10 random Numbers

for( let i=1 ; i<limit ; i++){
    
    const a = Math.floor(Math.random()*10)

    let m = a*i 
    // console.log(m)
    arr.push(m)
}
console.log("the array with 10 random numbers is:  ", arr)

// ----------------------------------------------

// for generating an array with numbers less than 40

let newarr = []

let lenarr = arr.length
// console.log(lenarr)

for(let j=0; j<lenarr+1; j++){

    if(arr[j]<40){

        newarr.push(arr[j])
        
    }
}
console.log("the new array with numbers less than 40 is: ",newarr)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// filter method


let filtered_arr=arr.filter(function(value){return value<40;})



console.log("the array with 10 random numbers less than 40 using filter :  ", filtered_arr)


// -----------------------------------------------------------------------------------------------------------------------------------------

// map function


function mul(value){

    return value*2
}

let mularr = newarr.map(mul)

console.log("the array multipiled by 2: ", mularr)


