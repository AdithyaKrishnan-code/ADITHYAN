let bd = document.body
let div = document.createElement("div")
let div2 = document.createElement("div")

div2.className = "div2"

let div2_1 = document.getElementsByClassName("div2")

let list = div2.classList
list.add("divstyle")

let div3 = document.getElementsByClassName("div2")



let cd = document.getElementById("heading")
console.log(cd);
cd.innerHTML = "<h1>goodbye</h1>"
cd.style.color="red"






div.style.backgroundColor = "black"
div.style.width="100px"
div.style.height = "100px"



div.append(div2)
bd.append(div)





