// ------------------------------------------------------------------importing html elements---------------------------------------------------------------------------------------------
let home_page = document.getElementById("main_page1")
let home_page_content = document.getElementById("basic_info")
let nav_bar = document.getElementById("nav_bar")
let home_page_content_2 = document.getElementById("main_page2")
let home_button = document.getElementById("home_button")

let login = document.getElementById("log_in_button")
let login_page = document.getElementById("login_page")

let signup = document.getElementById("signup_button")
let signup_page = document.getElementById("signup_page")

let deposit_button = document.getElementById("symbol_icon_deposit")
let deposit_page_close_button = document.getElementById("close_button")
let deposit_page = document.getElementById("deposit_page")
let deposit_confirmation_button = document.getElementById("confirmation_of_deposit")
let deposit_account_details = document.getElementById("depositing_account_details")
let deposit_button_div = document.getElementById("deposit_button")

let account_number_for_fund_transfer = document.getElementById("account_number_for_transactions")


let font_to_be_changed_while_changing_window = document.getElementById("deposit_heading")
let placeholder_to_be_changed = document.getElementById("deposit_amount_input_field")


let withdraw_button = document.getElementById("symbol_icon_withdraw")

let account_details_button = document.getElementById("symbol_icon_account_details")
let account_info = document.getElementById("account_details")
let account_number_of_holder = document.getElementById("account_number")
let balance_of_holder = document.getElementById("account_balance")
let ifsc_of_holder = document.getElementById("ifsc_code")

let balance_details_button = document.getElementById("symbol_icon_account_balance")


let userget = JSON.parse(localStorage.getItem("account_details"))

let button_to_signup_page_from_login_page = document.getElementById("to_go_to_signup_page")
let button_to_log_in_page_to_sign_up_page = document.getElementById("to_go_to_log_in_page")

let deposit_succesful_message = document.createElement("div")


// -----------------------------------------------------------------------------------------login and signup pages--------------------------------------------------------------------

login_page.style.display = "none"
signup_page.style.display = "none"



login.addEventListener("click", () => {


    home_page_content.style.display = "none"
    home_page_content_2.style.display = "none"
    signup_page.style.display = "none"
    page_3.style.display = "none"
    login_page.style.display = "flex"
    home_page.appendChild(login_page)

})

signup.addEventListener("click", () => {


    home_page_content.style.display = "none"
    home_page_content_2.style.display = "none"
    login_page.style.display = "none"
    page_3.style.display = "none"
    signup_page.style.display = "flex"
    home_page.appendChild(signup_page)


})


button_to_signup_page_from_login_page.addEventListener("click", () => {


    home_page_content.style.display = "none"
    home_page_content_2.style.display = "none"
    login_page.style.display = "none"
    page_3.style.display = "none"
    signup_page.style.display = "flex"
    home_page.appendChild(signup_page)


})

button_to_log_in_page_to_sign_up_page.addEventListener("click", () => {

    home_page_content.style.display = "none"
    home_page_content_2.style.display = "none"
    signup_page.style.display = "none"
    page_3.style.display = "none"
    login_page.style.display = "flex"
    home_page.appendChild(login_page)

})


// home_button.addEventListener("click", () => {

//     location.reload();
// })

// -----------------------------------------------------------------services of the bank---------------------------------------------------------------------------------------------------------------


deposit_button.addEventListener("click", () => {


    deposit_page.showModal()
    deposit_account_details.style.display = "flex"
    font_to_be_changed_while_changing_window.innerText = "Deposit"
    deposit_confirmation_button.innerText = "Deposit"
    placeholder_to_be_changed.placeholder = "Enter your deposit amount.."
    deposit_button_div.style.display = "flex"
    account_info.style.display = "none"
    password_for_fund_transfer.style.display = "flex"
    account_number_for_fund_transfer.style.display = "flex"
    placeholder_to_be_changed.style.display = "flex"
    deposit_succesful_message.style.display = "none"
    console.log("hello_wworld")
})

deposit_page_close_button.addEventListener("click", () => {


    deposit_page.close()
    console.log("hello_wworld")
})


withdraw_button.addEventListener("click", () => {


    deposit_page.showModal()
    deposit_account_details.style.display = "flex"
    font_to_be_changed_while_changing_window.innerText = "Withdraw"
    deposit_confirmation_button.innerText = "Withdraw"
    placeholder_to_be_changed.placeholder = "Enter your withdraw amount.."
    deposit_button_div.style.display = "flex"
    account_info.style.display = "none"
    console.log("hello_wworld")

})

account_details_button.addEventListener("click", () => {

    deposit_page.showModal()
    deposit_account_details.style.display = "none"
    deposit_button_div.style.display = "none"
    account_info.style.display = "flex"
    ifsc_of_holder.style.display = "flex"
    document.getElementById("account_number").style.display = "flex"
    document.getElementById("account_balance").style.display = "flex"
    font_to_be_changed_while_changing_window.innerText = "Account Details"


    deposit_page.appendChild(account_info)


})

balance_details_button.addEventListener("click", () => {

    deposit_page.showModal()
    deposit_account_details.style.display = "none"
    deposit_button_div.style.display = "none"
    account_info.style.display = "flex"
    document.getElementById("account_number").style.display = "flex"
    document.getElementById("account_balance").style.display = "flex"
    ifsc_of_holder.style.display = "none"
    font_to_be_changed_while_changing_window.innerText = "Balance of the Account"



    deposit_page.appendChild(account_info)
})

// -------------------------------------------------------signup -----------------------------------------------------------------------------------------------------------------------


let signup_page_first_name = document.getElementById("first_name_in_sign_up_page")

let signup_page_second_name = document.getElementById("second_name_in_sign_up_page")

let signup_page_email = document.getElementById("email_in_sign_up_page")

let signup_page_password = document.getElementById("password_in_sign_up_page")

let signup_button_for_creating_account = document.getElementById("signup_button_for_signning_up")

let signup_details_area = document.getElementById("signup_area_with_details")

let signup_successful_message = document.getElementById("message_for_signup_page")

let signup_heading = document.getElementById("login_heading")

let page_3 = document.getElementById("main_page3")

let footer = document.getElementById("footer")

console.log(signup_heading)

function add_new_user() {

    page_3.style.display = "none"

    footer.style.display = "none"

    let userget = JSON.parse(localStorage.getItem("account_details"))

    let generated_Account_number = Math.floor(Math.random() * 1000000000);

    let generated_ifsc_number = Math.floor(Math.random() * 10000);

    users = {

        first_name: signup_page_first_name.value,
        second_name: signup_page_second_name.value,
        email: signup_page_email.value,
        password: signup_page_password.value,
        account_number: generated_Account_number,
        ifsc_code: generated_ifsc_number,
        balance: 0
    }

    if (signup_page_first_name.value == "" || signup_page_second_name.value == "" || signup_page_password.value == "" || signup_page_email.value == "") {

        alert("kindly enter all the details !!!!!!");

    }

    else {


        if (userget == null) {

            let details = []

            details.push(users)

            localStorage.setItem("account_details", JSON.stringify(details))

            signup_details_area.style.display = "none"

            signup_heading.style.fontSize = "163%"

            signup_heading.innerHTML = "Signup Successful with account number :" + users.account_number

            signup_successful_message.innerText = "Your account has been created successfully!!"

            // alert("signup succesful")


        }


        else if (userget != null) {

            let emailexists = false

            for (let i = 0; i < userget.length; i++) {

                if (userget[i].email === signup_page_email.value) {

                    emailexists = true

                    // alert("not possible")

                    signup_details_area.style.display = "none"

                    signup_heading.innerHTML = "Signup Unsuccessful"

                    signup_successful_message.innerText = "E-Mail has been already registerd"



                    break


                }

            }

            if (!emailexists) {

                userget.push(users)

                localStorage.setItem("account_details", JSON.stringify(userget))

                userget = JSON.parse(localStorage.getItem("account_details"))

                signup_details_area.style.display = "none"

                signup_heading.style.fontSize = "163%"

                signup_heading.innerHTML = "Signup Successful with account number:" + users.account_number

                signup_successful_message.innerText = "Your account has been created successfully!! "


            }


        }

    }
}

signup_button_for_creating_account.addEventListener("click", add_new_user)


// -----------------------------------------------------------login in--------------------------------------------------------------------------------------------------------------------





let email_for_login = document.getElementById("email_for_login")

let password_for_login = document.getElementById("password_for_log_in")

let button_to_log_in = document.getElementById("login_to_account_button")

let changing_log_in_box_part = document.getElementById("log_in_box_to_be_change")

let changing_log_in_heading = document.getElementById("login_heading_login_page")

let information_about_the_logged_account = document.getElementById("login_account_details_page")

let log_in_area_after_loggining_in = document.getElementById("login_area")

function loggin_in() {

    page_3.style.display = "none"

    footer.style.display = "none"

    let user_found = false

    if (email_for_login.value != "" || password_for_login.value != "") {

        for (let j = 0; j < userget.length; j++) {

            if (email_for_login.value == userget[j].email && password_for_login.value == userget[j].password) {

                account_number_for_fund_transfer.style.display = "flex"

                changing_log_in_box_part.style.display = "none"

                changing_log_in_heading.innerText = "Login Sucessful"

                signup.style.display = "none"

                login.style.display = "none"

                changing_log_in_heading.style.height = "85%"

                information_about_the_logged_account.classList.remove("messages_of_login")

                information_about_the_logged_account.style.color = "#ffffff"

                information_about_the_logged_account.classList.add("signupmessage")

                information_about_the_logged_account.innerHTML = "ACCOUNT NUMBER" + " : " + userget[j].account_number + "<br>" + " FIRST NAME" + " : " + userget[j].first_name + " <br>" + "BALANCE" + " : " + userget[j].balance + " <br> " + "Ifsc code" + " : " + userget[j].ifsc_code

                log_in_area_after_loggining_in.id = "login_area_after_logging_in"

                account_number_of_holder.innerHTML = "Account number" + " : " + userget[j].account_number

                balance_of_holder.innerText = "Balance" + " : " + userget[j].balance

                ifsc_of_holder.innerText = "Ifsc code" + " : " + userget[j].ifsc_code

                account_number_for_fund_transfer.defaultValue = userget[j].account_number



                user_found = true


                break

            }
        }

        if (user_found == true) {

            home_button.addEventListener("click", () => {

                log_in_area_after_loggining_in.style.display = "none"

                home_page_content.style.display = "flex"

                home_page_content_2.style.display = "flex"

                home_page_content_2.style.flexDirection = "column"

                page_3.style.display = "flex"

                footer.style.display = "flex"

                signup.style.display = "none"

                login.style.display = "none"

                let log_out_button = document.createElement("button")

                log_out_button.classList.add("registering")

                log_out_button.id = "log_out_button"

                log_out_button.innerText = "LOG OUT"

                document.getElementById("authentication").appendChild(log_out_button)

                deposit_confirmation_button.addEventListener("click", () => {

                    console.log("pressed")

                    let checker = false

                    for (let k = 0; k < userget.length; k++) {

                        if (account_number_for_fund_transfer.value == userget[k].account_number && password_for_fund_transfer.value == userget[k].password) {

                            console.log(userget[k].balance)

                            userget[k].balance += Number(placeholder_to_be_changed.value)

                            console.log(userget[k].balance)

                            localStorage.setItem("account_details", JSON.stringify(userget))

                            balance_of_holder.innerText = "Balance" + " : " + userget[k].balance

                            checker = true

                        }

                        else {

                            alert("INCORRECT CREDENTIALS")
                        }

                    }

                    if (checker = true) {

                        placeholder_to_be_changed.value = ""

                        password_for_fund_transfer.value = ""

                    }
                })

            })
        }

        if (!user_found) {

            changing_log_in_box_part.style.display = "none"

            changing_log_in_heading.innerText = "Login Unsucessful"

        }
    }

    else {

        alert("KINDLY ENTER YOUR DETAILS !!!!")
    }
}


button_to_log_in.addEventListener("click", loggin_in)


// -------------------------------------------------------------------deposit-------------------------------------------------------------------------------------------------------




let password_for_fund_transfer = document.getElementById("password_for_transactions")

let clear_button = false

deposit_confirmation_button.addEventListener("click", () => {

    password_for_fund_transfer.style.display = "flex"

    account_number_for_fund_transfer.style.display = "flex"

    placeholder_to_be_changed.style.display = "flex"

    console.log("pressed")

    for (let k = 0; k < userget.length; k++) {

        if (account_number_for_fund_transfer.value == userget[k].account_number && password_for_fund_transfer.value == userget[k].password) {

            console.log(userget[k].balance)

            userget[k].balance += Number(placeholder_to_be_changed.value)

            console.log(userget[k].balance)

            localStorage.setItem("account_details", JSON.stringify(userget))

            alert("deposit successful")

            password_for_fund_transfer.style.display = "none"

            account_number_for_fund_transfer.style.display = "none"

            placeholder_to_be_changed.style.display = "none"

            deposit_button_div.style.display = "none"

            deposit_succesful_message.classList.add("deposit_message_success")

            deposit_succesful_message.innerText = "Deposit Sucessfull"

            deposit_account_details.appendChild(deposit_succesful_message)

            deposit_succesful_message.style.display = "flex"

            placeholder_to_be_changed.value = ""

            password_for_fund_transfer.value = ""

            account_number_for_fund_transfer.value = ""

            break

        }

        else {

            password_for_fund_transfer.style.display = "none"

            account_number_for_fund_transfer.style.display = "none"

            placeholder_to_be_changed.style.display = "none"

            deposit_button_div.style.display = "none"

            deposit_succesful_message.classList.add("deposit_message_success")

            deposit_succesful_message.innerText = "Deposit Unsucessfull Check Credentials"

            deposit_account_details.appendChild(deposit_succesful_message)

            deposit_succesful_message.style.display = "flex"

            placeholder_to_be_changed.value = ""

            password_for_fund_transfer.value = ""

            account_number_of_holder.value = ""
        }

    }


})




