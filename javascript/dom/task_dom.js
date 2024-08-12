let bd = document.body
let div = document.createElement("div")
let div2 = document.createElement("div2")


let cd = document.getElementById("heading")
console.log(cd);
cd.innerHTML = "<h1>goodbye</h1>"
cd.style.color="red"


bd.append(div)
bd.append(div2)

div.style.backgroundColor = "black"
div.style.width="100px"
div.style.height = "100px"

