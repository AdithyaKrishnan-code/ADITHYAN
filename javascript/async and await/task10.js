let username = document.getElementById("username")

let email = document.getElementById("email")

let password = document.getElementById("password")

let login = document.getElementById("login")

let signup = document.getElementById("signup")

let lbox = document.getElementById("lbox")

let mainpg = document.getElementById("mainpg")

let userget = JSON.parse(localStorage.getItem("user_details"))



let loginspace = document.getElementById("loginspace")

let back_button = document.getElementById("arrow")





email.style.display = "none"






// for signup button in the sign up page ----------------------------------------------------------------------------------------

function adddata() {

    user = {
        u_name: username.value,
        e_mail: email.value,
        p_word: password.value
    }

    if (username.value == "" || email.value == "" || password.value == "") {

        alert("kindly enter all the details !!!!!!");
    }

    else {

        if (userget == null) {

            let details = []
            details.push(user)
            localStorage.setItem("user_details", JSON.stringify(details))
        } else {

            userget.push(user)

            localStorage.setItem("user_details", JSON.stringify(userget))
        }
    }




    if (username.value != "" && email.value != "" && password.value != "") {


        let page3 = document.getElementById("page")

        page3.style.display = "none"

        console.log("hello");

        let newpage = document.createElement("div")

        let logmessage = document.createElement("div")

        logmessage.innerHTML = "<h1>SIGN UP SUCCESSFUL !</h1>"

        mainpg.appendChild(newpage)

        newpage.appendChild(logmessage)

        newpage.style.display = "flex"

        newpage.classList.add("loginmessagebox")
        logmessage.classList.add("loginmess")


    } else {
        let page3 = document.getElementById("page")
        page3.style.display = "none"

        console.log("hello");

        let newpage = document.createElement("div")

        let logmessage = document.createElement("div")

        logmessage.innerHTML = "<h1>ENTER VALID VALUES!</h1>"

        mainpg.appendChild(newpage)
        newpage.appendChild(logmessage)

        newpage.style.display = "flex"

        newpage.classList.add("loginmessagebox")
        logmessage.classList.add("loginmess")
    }




}
// -------------new page function (signup)----------------------------------------------------------------------------------------------------------

signup.addEventListener("click", newpage)


function newpage() {


    // -----for creating a new page for sign up---------------------------------------------------------------------------

    username.value = ""
    password.value = ""
    email.value = ""

    lbox.style.display = "none"

    let signup_page = document.createElement("div")

    signup_page.id = "page"

    signup_page.classList.add("loginbox")

    mainpg.appendChild(signup_page)

    let signup_details1 = document.createElement("div")
    let signup_details2 = document.createElement("div")

    signup_details1.classList.add("loginspace3")
    signup_details2.classList.add("loginspace2")

    signup_page.appendChild(signup_details1)
    signup_page.appendChild(signup_details2)

    // sign up button-----------------------------------------------------------------------------------------------------------

    let signup_button_container = document.createElement("div")
    signup_button_container.classList.add("button")

    let signup_button = document.createElement("button")
    signup_button.classList.add("button")
    signup_button.innerHTML = "SIGN UP"

    signup_details2.appendChild(signup_button_container)
    signup_button_container.appendChild(signup_button)

    signup_button.addEventListener("click", adddata)


    // -----signup details-----------------------------------------------------------------------------------------------------------------------

    username.classList.add("inputfield2")
    email.classList.add("inputfield2")
    password.classList.add("inputfield2")

    email.style.display = "flex"

    signup_details1.appendChild(username)
    signup_details1.appendChild(email)
    signup_details1.appendChild(password)


    // ----event listener for the signup button in signup page--------------------------------------------

    signup_button.addEventListener("click", adddata)


}

// login function -----------------------------------------------------------------------------------------------------------------------

login.addEventListener("click", () => {

    console.log("hello login");


    let user_found = false
    let i = 0

    console.log("before loop");

    if (username.value != "" && password.value != "") {

        for (; i < userget.length; i++) {

            if (userget[i].u_name == username.value && userget[i].p_word == password.value) {

                lbox.style.display = "none";

                console.log("hello");

                let newpage = document.createElement("div")

                let logmessage = document.createElement("div")

                logmessage.innerHTML = "<h1>LOGIN SUCCESSFUL !</h1>"

                mainpg.appendChild(newpage)
                newpage.appendChild(logmessage)

                newpage.style.display = "flex"

                newpage.classList.add("loginmessagebox")
                logmessage.classList.add("loginmess")

                user_found == true
                break

            } else {

                lbox.style.display = "none";

                let newpage = document.createElement("div")

                let logmessage = document.createElement("div")

                logmessage.innerHTML = "<h1>LOGIN NOT SUCCESSFUL !</h1>"

                mainpg.appendChild(newpage)
                newpage.appendChild(logmessage)

                newpage.style.display = "flex"

                newpage.classList.add("loginmessagebox")
                logmessage.classList.add("loginmess2")
                break
            }
        }
    } else {
        console.log("wrong");
        console.log("hello world");

        lbox.style.display = "none";

        let newpage = document.createElement("div")

        let logmessage = document.createElement("div")

        logmessage.innerHTML = "<h1>EMPTY VALUES NOT ALLOWED !</h1>"

        mainpg.appendChild(newpage)
        newpage.appendChild(logmessage)

        newpage.style.display = "flex"

        newpage.classList.add("loginmessagebox")
        logmessage.classList.add("loginmess2")
    }
})


// -------------------------------------------------------------------------------------------------

back_button.addEventListener("click", () => {

    location.reload()

})