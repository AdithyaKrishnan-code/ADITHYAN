
function multipilication(tot){

    tot = 4*23
    console.log(tot)

}

multipilication()

// -----------------------------------------------------------------------------------------




function multipilication_params(value1,value2){

    tot = value1*value2

    console.log(tot)
}

multipilication_params(2,3)


// -------------------------------------------------------------------------------------------------


// area of circle


function area(){


    const pi =3.1416

    circel_area = pi*square()

    return circel_area


}



function square(value1){

    value1 = prompt("enter the radius of the circle :")

    return value1 * value1
    

}

function display(){

    console.log(area(),"cm2")
}

display()