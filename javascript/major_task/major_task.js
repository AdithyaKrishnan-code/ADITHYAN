let home_page = document.getElementById("main_page1") 
let home_page_content = document.getElementById("basic_info") 
let nav_bar = document.getElementById("nav_bar")
let login = document.getElementById("log_in_button")
let login_page = document.getElementById("login_page")
let home_page_content_2 = document.getElementById("main_page2")

// console.log(login)
// console.log(home_page_content)


login_page.style.display = "none"

login.addEventListener("click",()=>{


    home_page_content.style.display = "none"
    home_page_content_2.style.display = "none"
    login_page.style.display = "flex"
    home_page.appendChild(login_page)

})