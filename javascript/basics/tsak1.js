
var total_items= prompt("enter total amount of items")



var tot=0

for(let i=0; i<total_items;i++){

    var quantity = prompt("enter the quantity of items: ")
    var price = prompt("enter the price of item")
    
    tot = tot+ quantity*price
}

discount=0

if( tot>500){

    discount=10/100*tot
    tot=tot-discount
    console.log("discounted price is",tot)
}
else{

    console.log(tot)
}