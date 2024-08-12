let array = [1, 2, 3, 4, 5, 6, 7, 8]
let tot=0
do {

    

    tot=0
    for (let i = 0; i < array.length; i++) {
         tot = tot + array[i]

    }

    // console.log(tot)

    if(tot > 20){

        array.shift()
        // console.log(array)
    }


} while(tot > 20)

console.log(array)


// Optimized solution

// let array = [1, 2, 3, 4, 5, 6, 7, 8]
// let tot=0

// for (let i = 0; i < array.length; i++) {
//     tot = tot + array[i]

// }

// console.log(tot)

// do {





//     if(tot > 20){

//         let first=array[0]
//         tot=tot-first
//         array.shift()

//         // console.log(array)
//     }


// } while(tot > 20)

console.log(array)
