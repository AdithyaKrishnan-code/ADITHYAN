console.log("fruits available are : apple ,orange, grape, peach , mango")

var item = prompt("enter the fruit you want to find")

var fruits = ["apple", "orange", "grape", "peach", "mango"]

var i = 0
var found = false
while (i < 5) {



    if (fruits[i] == item) {

        found = true
        break;


    }

    i++;


}

if (found) {

    console.log(i)
}
else (
    console.log("not found")
)




