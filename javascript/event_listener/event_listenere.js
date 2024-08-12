let button_1 = document.querySelector(".but1")
let button_2 = document.querySelector(".but2")

function change_color(color){

    document.body.style.backgroundColor = color
}



button_1.addEventListener("click", () =>{change_color("red")})

button_2.addEventListener("click", () =>{change_color("blue")})


 
