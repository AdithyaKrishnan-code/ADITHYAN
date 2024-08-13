let edit_content = document.querySelector(".but1")
let color_change = document.querySelector(".but2")
let color_bgchange = document.querySelector(".but3")
let bd = document.body
let con = document.getElementById("head")




// -----------------------------------------------------------------------------------------------------------------------

// function to change content oh the h1 tag

function change_content(){
    
    let content = prompt("enter the new content ")

    con.innerHTML = content

    if(content = null){

        con.innerHTML = con.innerHTML

    }
}


//function to change color

// array of colors

let colors =["red","blue","green","violet","yellow","purple","cyan","magenta","orange","grey" ]

// font color
function change_color(){

    con.style.color = colors[Math.floor(Math.random()*colors.length)]
}
// backgroundcolor
function change_bodycolor(){

    bd.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
}







// -----------------------------------------------------------------------------------------------------------------------



// event listeners


// for changing content

edit_content .addEventListener("click",change_content)

// for chnaging color

color_change.addEventListener("click" , change_color)

// changing background color

color_bgchange.addEventListener("click" , change_bodycolor)





