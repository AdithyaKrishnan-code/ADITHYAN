let home_page = document.getElementById("main_page1") 
let home_page_content = document.getElementById("basic_info") 
let nav_bar = document.getElementById("nav_bar")
let home_page_content_2 = document.getElementById("main_page2")

let login = document.getElementById("log_in_button")
let login_page = document.getElementById("login_page")
let deposit_button  = document.getElementById("symbol_icon_deposit")
let deposit_page_close_button = document.getElementById("close_button")

let signup = document.getElementById("signup_button")
let signup_page = document.getElementById("signup_page")
let deposit_page = document.getElementById("deposit_page")






// console.log(login)
// console.log(signup_page)


login_page.style.display = "none"
signup_page.style.display = "none"



login.addEventListener("click",()=>{


    home_page_content.style.display = "none"
    home_page_content_2.style.display = "none"
    signup_page.style.display = "none"
    login_page.style.display = "flex"
    home_page.appendChild(login_page)

})

signup.addEventListener("click",()=>{


    home_page_content.style.display = "none"
    home_page_content_2.style.display = "none"
    login_page.style.display = "none"
    signup_page.style.display = "flex"
    home_page.appendChild(signup_page)


})

deposit_button.addEventListener("click",()=>{


    deposit_page.showModal()
    console.log("hello_wworld")
})

deposit_page_close_button.addEventListener("click",()=>{


    deposit_page.close()
    console.log("hello_wworld")
})


