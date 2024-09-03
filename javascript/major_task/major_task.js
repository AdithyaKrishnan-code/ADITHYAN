// ------------------------------------------------------------------importing html elements---------------------------------------------------------------------------------------------
let home_page = document.getElementById("main_page1")
let home_page_content = document.getElementById("basic_info")
let nav_bar = document.getElementById("nav_bar")
let home_page_content_2 = document.getElementById("main_page2")
let home_button = document.getElementById("back_button")

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


let font_to_be_changed_while_changing_window = document.getElementById("deposit_heading")
let placeholder_to_be_changed = document.getElementById("deposit_amount_input_field")


let withdraw_button = document.getElementById("symbol_icon_withdraw")

let account_details_button = document.getElementById("symbol_icon_account_details")
let account_info = document.getElementById("account_details")
let account_number_of_holder = document.getElementById("account_number")
let balance_of_holder = document.getElementById("account_balance")
let ifsc_of_holder = document.getElementById("ifsc_code")

let balance_details_button = document.getElementById("symbol_icon_account_balance")




// -----------------------------------------------------------------------------------------login and signup pages--------------------------------------------------------------------

login_page.style.display = "none"
signup_page.style.display = "none"



login.addEventListener("click", () => {


    home_page_content.style.display = "none"
    home_page_content_2.style.display = "none"
    signup_page.style.display = "none"
    login_page.style.display = "flex"
    home_page.appendChild(login_page)

})

signup.addEventListener("click", () => {


    home_page_content.style.display = "none"
    home_page_content_2.style.display = "none"
    login_page.style.display = "none"
    signup_page.style.display = "flex"
    home_page.appendChild(signup_page)


})

home_button.addEventListener("click",()=>{

    location.reload();
})

// -----------------------------------------------------------------services of the bank---------------------------------------------------------------------------------------------------------------

deposit_button.addEventListener("click", () => {


    deposit_page.showModal()
    deposit_account_details.style.display = "flex"
    font_to_be_changed_while_changing_window.innerText = "Deposit"
    deposit_confirmation_button.innerText = "Deposit"
    placeholder_to_be_changed.placeholder = "Enter your deposit amount.."
    deposit_button_div.style.display = "flex"
    account_info.style.display = "none"
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

account_details_button.addEventListener("click",()=>{

    deposit_page.showModal()
    deposit_account_details.style.display = "none"
    deposit_button_div.style.display = "none"
    account_info.style.display = "flex"
    ifsc_of_holder.style.display = "flex"
    font_to_be_changed_while_changing_window.innerText = "Account Details"
    account_number_of_holder.innerText = "the account number will be displayed here"
    balance_of_holder.innerText = "the account balance will be displayed here"
    ifsc_of_holder.innerText = "the ifsc number will be displayed here"

    deposit_page.appendChild(account_info)


})

balance_details_button.addEventListener("click" , ()=>{

    deposit_page.showModal()
    deposit_account_details.style.display = "none"
    deposit_button_div.style.display = "none"
    account_info.style.display = "flex"
    font_to_be_changed_while_changing_window.innerText = "Balance of the Account"
    account_number_of_holder.innerText = "the account number will be displayed here"
    balance_of_holder.innerText = "the account balance will be displayed here"
    ifsc_of_holder.style.display = "none"


    deposit_page.appendChild(account_info)
})


