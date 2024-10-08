// ------------------------------------------------------------------importing html elements---------------------------------------------------------------------------------------------

let home_page = document.getElementById("main_page1")
let home_page_content = document.getElementById("basic_info")
let nav_bar = document.getElementById("nav_bar")
let home_page_content_2 = document.getElementById("main_page2")
let home_button = document.getElementById("home_button")

let login = document.getElementById("log_in_button")
let login_page = document.getElementById("login_page")
let log_in_page_sub_text = document.getElementById("sub_text_for_login")

let signup = document.getElementById("signup_button")
let signup_page = document.getElementById("signup_page")

let deposit_button = document.getElementById("symbol_icon_deposit")
let deposit_page_close_button = document.getElementById("close_button")
let deposit_page = document.getElementById("deposit_page")
let deposit_confirmation_button = document.getElementById("confirmation_of_deposit")
let deposit_account_details = document.getElementById("depositing_account_details")
let deposit_button_div = document.getElementById("deposit_button")

let withdraw_page = document.getElementById("withdraw_account_details")
let withdraw_button_div = document.getElementById("withdraw_button_style")
let withdraw_button = document.getElementById("symbol_icon_withdraw")
let withdraw_confirmation_button = document.getElementById("confirmation_of_withdraw")
let password_for_withdraw = document.getElementById("password_for_withdraw")
let account_number_for_withdrawal = document.getElementById("account_number_for_withdraw")
let amount_for_withdrawal = document.getElementById("withdraw_amount_input_field")


let account_number_for_fund_transfer = document.getElementById("account_number_for_transactions")


let font_to_be_changed_while_changing_window = document.getElementById("deposit_heading")
let placeholder_to_be_changed = document.getElementById("deposit_amount_input_field")




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
let withdraw_succesful_message = document.createElement("div")
let transfer_succesful_message = document.createElement("div")



let_log_out_button = document.getElementById("log_out_button")

let text_to_be_changed_to_username = document.getElementById("change_to_username")

let text_to_be_changed_to_newt_ext = document.getElementById("newtext")

let hamburger_icon = document.getElementById("hamburger_icon")
let phone_authentication = document.getElementById("Phone_menu")

let button_for_transaction_history = document.getElementById("transaction_history_page")
let button_for_closing_trasaction_page = document.getElementById("close_button_for_transaction_page")

let deposit_table = document.getElementById("transaction_for_deposit_amounts")
let withdraw_table = document.getElementById("transaction_for_withdraw_amounts")

let transaction_items = document.getElementById("trasanction_items_w/d")

let fund_transfer_button = document.getElementById("symbol_icon_transfer")
let transfer_page = document.getElementById("transfer_page")
let transfer_page_details = document.getElementById("transfer_page_details")
let tranfer_page_close_button = document.getElementById("close_button_for_transfer_page")
let account_number_of_the_reciever = document.getElementById("account_number_of_the_reciever")
let password_for_transfer = document.getElementById("password_for_transfer")
let amount_for_transfer = document.getElementById("amount_for_transfer")
let transfer_confirmation_button = document.getElementById("confirmation_of_transfer")
let transfer_confirmation_button_div = document.getElementById("transfer_button_style")

var theDate = new Date(Date.parse(new Date()))
let time_taken = theDate.toLocaleString()







// -----------------------------------------------------------------------------------------login and signup pages-----------------------------------------------------------------------------------------------------------

login_page.style.display = "none"
signup_page.style.display = "none"




function home_button_before_login() {

    Location.reload()

}

// ----------------------------------------------------------------------------------------------deposit and withdraw in home page ----------------------------------------------------------------------------------------

function deposit_before_log_in() {

    deposit_page.showModal()

    deposit_account_details.style.display = "none"
    font_to_be_changed_while_changing_window.innerText = "Deposit"
    deposit_confirmation_button.innerText = "Deposit"
    placeholder_to_be_changed.placeholder = "Enter your deposit amount.."
    deposit_button_div.style.display = "flex"
    account_info.style.display = "flex"
    password_for_fund_transfer.style.display = "flex"
    account_number_for_fund_transfer.style.display = "flex"
    placeholder_to_be_changed.style.display = "flex"
    deposit_succesful_message.style.display = "none"
    deposit_button_div.style.display = "none"
    withdraw_page.style.display = "none"
    withdraw_button_div.style.display = "none"
    account_number_of_holder.style.display = "none"
    balance_of_holder.innerText = "PLEASE LOG IN TO AVAIL THIS FUNCTION"
    ifsc_of_holder.style.display = "none"

}
function withdraw_before_log_in() {

    deposit_page.showModal()

    deposit_account_details.style.display = "none"
    font_to_be_changed_while_changing_window.innerText = "Deposit"
    deposit_confirmation_button.innerText = "Deposit"
    placeholder_to_be_changed.placeholder = "Enter your deposit amount.."
    deposit_button_div.style.display = "flex"
    account_info.style.display = "flex"
    password_for_fund_transfer.style.display = "flex"
    account_number_for_fund_transfer.style.display = "flex"
    placeholder_to_be_changed.style.display = "flex"
    deposit_succesful_message.style.display = "none"
    deposit_button_div.style.display = "none"
    withdraw_page.style.display = "none"
    withdraw_button_div.style.display = "none"
    account_number_of_holder.style.display = "none"
    balance_of_holder.innerText = "PLEASE LOG IN TO AVAIL THIS FUNCTION"
    ifsc_of_holder.style.display = "none"
}

function account_details_before_log_in() {

    deposit_page.showModal()
    deposit_account_details.style.display = "none"
    deposit_button_div.style.display = "none"
    account_info.style.display = "flex"
    ifsc_of_holder.style.display = "flex"
    document.getElementById("account_number").style.display = "flex"
    document.getElementById("account_balance").style.display = "flex"
    font_to_be_changed_while_changing_window.innerText = "Account Details"
    balance_of_holder.innerText = "Account balance will be dispalyed here"
    withdraw_page.style.display = "none"
    withdraw_button_div.style.display = "none"

    deposit_page.appendChild(account_info)


}

function view_balance_before_login() {

    deposit_page.showModal()
    deposit_account_details.style.display = "none"
    deposit_button_div.style.display = "none"
    account_info.style.display = "flex"
    document.getElementById("account_number").style.display = "flex"
    document.getElementById("account_balance").style.display = "flex"
    ifsc_of_holder.style.display = "none"
    font_to_be_changed_while_changing_window.innerText = "Balance of the Account"
    balance_of_holder.innerText = "Account balance will be dispalyed here"
    withdraw_page.style.display = "none"
    withdraw_button_div.style.display = "none"

    deposit_page.appendChild(account_info)
}



// ---------------------------------------------------------------------------------buttons-----------------------------------------------------------------------------------------------------



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

// --------------------------------------------------------------services------------------------------------------------------------------------------------------------------------


deposit_page_close_button.addEventListener("click", () => {

    deposit_page.close()
})

deposit_button.addEventListener("click", deposit_before_log_in)

withdraw_button.addEventListener("click", withdraw_before_log_in)

account_details_button.addEventListener("click", account_details_before_log_in)

balance_details_button.addEventListener("click", view_balance_before_login)

// -------------------------------------------------------signup-----------------------------------------------------------------------------------------------------------------------


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

function add_new_user() {

    home_button.addEventListener("click", home_button_before_login)

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
        balance: 0,
        log_status: false,
        transaction_history: []
    }

    let pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    let password_validity = false

    if (pattern.test(signup_page_password.value)) {

        password_validity = true

    }

    else {

        password_validity = false
    }

    if (signup_page_first_name.value == "" || signup_page_second_name.value == "" || signup_page_password.value == "" || signup_page_email.value == "") {

        alert("kindly enter all the details !!!!!!");

    }

    else if (password_validity == false) {

        alert("Password not strong enough")
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


        }


        else if (userget != null) {

            let emailexists = false

            for (let i = 0; i < userget.length; i++) {

                if (userget[i].email === signup_page_email.value) {

                    emailexists = true

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


// -----------------------------------------------------------login---------------------------------------------------------------------------------------------------------------


let email_for_login = document.getElementById("email_for_login")

let password_for_login = document.getElementById("password_for_log_in")

let button_to_log_in = document.getElementById("login_to_account_button")

let changing_log_in_box_part = document.getElementById("log_in_box_to_be_change")

let changing_log_in_heading = document.getElementById("login_heading_login_page")

let information_about_the_logged_account = document.getElementById("login_account_details_page")

let log_in_area_after_loggining_in = document.getElementById("login_area")

function loggin_in() {

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
        deposit_button_div.style.display = "flex"
        withdraw_page.style.display = "none"
        withdraw_button_div.style.display = "none"
    })

    withdraw_button.addEventListener("click", () => {


        deposit_page.showModal()
        font_to_be_changed_while_changing_window.innerText = "Withdraw"
        deposit_account_details.style.display = "none"
        withdraw_page.style.display = "flex"
        withdraw_page.style.flexDirection = "column"
        account_info.style.display = "none"
        deposit_button_div.style.display = "none"
        withdraw_button_div.style.display = "flex"
        password_for_withdraw.style.display = "flex"
        account_number_for_withdrawal.style.display = "flex"
        amount_for_withdrawal.style.display = "flex"
        withdraw_page.removeChild(withdraw_succesful_message)

    })



    let span_balance = document.createElement("span")

    page_3.style.display = "none"

    footer.style.display = "none"


    let user_found = false

    if (email_for_login.value != "" || password_for_login.value != "") {

        for (let j = 0; j < userget.length; j++) {

            if (email_for_login.value == userget[j].email && password_for_login.value == userget[j].password) {

                account_details_button.addEventListener("click", () => {

                    span_balance.classList.remove("span_style_for_withdraw")

                    span_balance.classList.add("span_style_for_display")

                    span_balance.innerText = "Rs" + " " + userget[j].balance

                    balance_of_holder.innerText = "Balance" + " : " + "  "

                    balance_of_holder.appendChild(span_balance)

                    account_info.appendChild(transcations_details_button)


                })

                balance_details_button.addEventListener("click", () => {

                    span_balance.classList.remove("span_style_for_withdraw")

                    span_balance.classList.add("span_style_for_display")

                    span_balance.innerText = "Rs" + " " + userget[j].balance

                    balance_of_holder.innerText = "Balance" + " : " + "  "

                    balance_of_holder.appendChild(span_balance)

                    account_info.removeChild(transcations_details_button)



                })

                text_to_be_changed_to_newt_ext.innerText = "WELCOME"

                text_to_be_changed_to_username.innerText = "   " + userget[j].first_name



                userget[j].log_status = true

                localStorage.setItem("account_details", JSON.stringify(userget))

                let log_out_button = document.createElement("button")

                log_out_button.classList.add("registering")

                log_out_button.id = "log_out_button"

                log_out_button.innerText = "LOG OUT"

                document.getElementById("authentication").appendChild(log_out_button)

                deposit_confirmation_button.addEventListener("click", () => {

                    span_balance.classList.remove("span_style_for_withdraw")

                    span_balance.classList.add("span_style_for_display")

                    span_balance.innerText = "Rs" + " " + userget[j].balance

                    balance_of_holder.innerText = "Balance" + " : " + "  "

                    balance_of_holder.appendChild(span_balance)

                })

                withdraw_confirmation_button.addEventListener("click", () => {

                    span_balance.classList.add("span_style_for_withdraw")

                    span_balance.innerText = "Rs" + " " + userget[j].balance

                    balance_of_holder.innerText = "Balance" + " : " + "  "

                    balance_of_holder.appendChild(span_balance)

                })
                // ------------------------------------------------------------------------------------fund transfer between accounts---------------------------------------------------------------------------------------------
                fund_transfer_button.addEventListener("click", () => {


                    transfer_page.showModal()

                    account_number_of_the_reciever.value = ""
                    amount_for_transfer.value = ""
                    password_for_transfer.value = ""

                    transfer_page_details.removeChild(message_in_the_modal_in_home_page)

                    amount_for_transfer.style.display = "flex"

                    account_number_of_the_reciever.style.display = "flex"

                    password_for_transfer.style.display = "flex"

                    transfer_confirmation_button_div.style.display = "flex"

                    transfer_page_details.removeChild(transfer_succesful_message)




                })
                // ---------------------------------------------------------------------------fund transfer between accounts---------------------------------------------------------------------------------------------------
                transfer_confirmation_button.addEventListener("click", () => {


                    let sending_account = account_number_of_the_reciever.value
                    let amount_for_transferred = amount_for_transfer.value
                    let password_to_confirm_transfer = password_for_transfer.value
                    let flag_for_transfer = false




                    for (let ii = 0; ii < userget.length; ii++) {


                        if (sending_account == userget[ii].account_number && userget[j].password == password_to_confirm_transfer) {

                            if (sending_account == userget[j].account_number) {

                                flag_for_transfer = true

                                amount_for_transfer.style.display = "none"

                                account_number_of_the_reciever.style.display = "none"

                                password_for_transfer.style.display = "none"

                                transfer_confirmation_button_div.style.display = "none"

                                transfer_succesful_message.style.display = "flex"

                                transfer_succesful_message.classList.add("deposit_message_success")

                                transfer_succesful_message.innerText = "Cannot transfer to Logged account"

                                transfer_page_details.appendChild(transfer_succesful_message)


                            }

                            else if (amount_for_transferred > userget[j].balance) {

                                flag_for_transfer = true

                                amount_for_transfer.style.display = "none"

                                account_number_of_the_reciever.style.display = "none"

                                password_for_transfer.style.display = "none"

                                transfer_confirmation_button_div.style.display = "none"

                                transfer_succesful_message.style.display = "flex"

                                transfer_succesful_message.classList.add("deposit_message_success")

                                transfer_succesful_message.innerText = "Insufficient Balance"

                                transfer_page_details.appendChild(transfer_succesful_message)


                            }

                            else {


                                flag_for_transfer = true

                                userget[ii].balance += Number(amount_for_transferred)

                                userget[j].balance -= Number(amount_for_transferred)

                                userget[j].transaction_history.push(
                                    {
                                        amount: amount_for_transferred,
                                        transaction_type: "Amount debited",
                                        time: time_taken
                                    }


                                )

                                userget[ii].transaction_history.push(
                                    {
                                        amount: amount_for_transferred,
                                        transaction_type: "Amount Credited",
                                        time: time_taken
                                    }


                                )

                                localStorage.setItem("account_details", JSON.stringify(userget))

                                localStorage.setItem("account_details", JSON.stringify(userget))

                                span_balance.innerText = "Rs" + " " + userget[j].balance

                                amount_for_transfer.style.display = "none"

                                account_number_of_the_reciever.style.display = "none"

                                password_for_transfer.style.display = "none"

                                transfer_confirmation_button_div.style.display = "none"

                                transfer_succesful_message.style.display = "flex"

                                transfer_succesful_message.classList.add("deposit_message_success")

                                transfer_succesful_message.innerText = "Transfer Sucessful"

                                transfer_page_details.appendChild(transfer_succesful_message)

                            }



                        }

                    }


                    if (!flag_for_transfer) {

                        amount_for_transfer.style.display = "none"

                        account_number_of_the_reciever.style.display = "none"

                        password_for_transfer.style.display = "none"

                        transfer_confirmation_button_div.style.display = "none"

                        transfer_succesful_message.style.display = "flex"

                        transfer_succesful_message.classList.add("deposit_message_success")

                        transfer_succesful_message.innerText = "Transfer Unsucessful Check Credentials"

                        transfer_page_details.appendChild(transfer_succesful_message)

                    }
                })
                // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                log_out_button.addEventListener("click", () => {

                    userget[j].log_status = Number(0)

                    localStorage.setItem("account_details", JSON.stringify(userget))

                    alert("DO YOU WANT TO LOG OUT")

                    location.reload()

                })

                account_number_for_fund_transfer.style.display = "flex"

                changing_log_in_box_part.style.display = "none"

                changing_log_in_heading.innerText = "Login Sucessful"

                signup.style.display = "none"

                login.style.display = "none"

                changing_log_in_heading.style.height = "85%"

                information_about_the_logged_account.classList.remove("messages_of_login")

                information_about_the_logged_account.style.color = "#ffffff"

                information_about_the_logged_account.classList.add("signupmessage")

                information_about_the_logged_account.innerHTML = "ACCOUNT NUMBER" + " : " + userget[j].account_number + "<br>" + " FIRST NAME" + " : " + userget[j].first_name + " <br>" + "BALANCE" + "  " + " Rs " + " : " + userget[j].balance + " <br> " + "Ifsc code" + " : " + userget[j].ifsc_code

                log_in_area_after_loggining_in.id = "login_area_after_logging_in"

                let home_button_in_log_in_page = document.createElement("button")

                home_button_in_log_in_page.innerText = "Home"

// ----------------------------------------------------------------------------------------transaction histrory--------------------------------------------------------------------------------------

                let transcations_details_button = document.createElement("button")

                transcations_details_button.classList.add("transactions_page_in_log_in_page")

                transcations_details_button.innerText = "Transaction History"

                transcations_details_button.addEventListener("click", () => {

                    button_for_transaction_history.style.display = "flex"

                    button_for_transaction_history.showModal();

                    transaction_items.innerHTML = ""

                    for (let l = 0; l < userget[j].transaction_history.length; l++) {

                        let div_for_items = document.createElement("p")

                        let transaction_history_amount = document.createElement("span")
                        let transaction_history_type = document.createElement("span")
                        let transaction_history_time = document.createElement("span")

                        transaction_history_amount.innerText = " Rs " + userget[j].transaction_history[l].amount
                        transaction_history_type.innerText =  " " + userget[j].transaction_history[l].transaction_type
                        transaction_history_time.innerText = "  on " + userget[j].transaction_history[l].time

                        transaction_history_type.classList.add("transaction_history_span_style")
                        div_for_items.classList.add("font_color_for_transactions")
                        
                        // div_for_items.innerText = " Rs " + userget[j].transaction_history[l].amount + " " + userget[j].transaction_history[l].transaction_type + "  on " + userget[j].transaction_history[l].time

                        div_for_items.appendChild(transaction_history_amount)
                        div_for_items.appendChild(transaction_history_type)
                        div_for_items.appendChild(transaction_history_time)
                        transaction_items.appendChild(div_for_items)

                        button_for_transaction_history.appendChild(transaction_items)

                    }

                })

                button_for_closing_trasaction_page.addEventListener("click", () => {

                    button_for_transaction_history.close()

                    button_for_transaction_history.style.display = "none"
                })
                //  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                home_button_in_log_in_page.addEventListener("click", () => {

                    log_in_area_after_loggining_in.style.display = "none"

                    home_page_content.style.display = "flex"

                    home_page_content_2.style.display = "flex"

                    home_page_content_2.style.flexDirection = "column"

                    page_3.style.display = "none"

                    footer.style.display = "flex"

                    signup.style.display = "none"

                    login.style.display = "none"
                })



                home_button_in_log_in_page.classList.add("diff_pages_home_in_log_in_page")

                log_in_area_after_loggining_in.style.gap = "99px"

                log_in_area_after_loggining_in.appendChild(home_button_in_log_in_page)

                let span_account_number = document.createElement("span")

                span_account_number.classList.add("span_style_for_display")

                span_account_number.innerText = "  " + userget[j].account_number

                account_number_of_holder.innerHTML = "Account number" + " : " + "   "

                account_number_of_holder.appendChild(span_account_number)


                span_balance.classList.add("span_style_for_display")

                span_balance.innerText = "Rs" + " " + userget[j].balance

                balance_of_holder.innerText = "Balance" + " : " + "  "

                balance_of_holder.appendChild(span_balance)


                let span_ifsc_code = document.createElement("span")

                span_ifsc_code.classList.add("span_style_for_display")

                span_ifsc_code.innerText = userget[j].ifsc_code

                ifsc_of_holder.innerText = "Ifsc code" + " : "

                ifsc_of_holder.appendChild(span_ifsc_code)



                account_number_for_fund_transfer.defaultValue = userget[j].account_number

                account_number_for_withdrawal.defaultValue = userget[j].account_number

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

                page_3.style.display = "none"

                footer.style.display = "flex"

                signup.style.display = "none"

                login.style.display = "none"

            })
        }

        if (!user_found) {

            changing_log_in_box_part.style.display = "none"

            changing_log_in_heading.innerText = "Login Unsucessful"

            log_in_page_sub_text.innerText = "Check your credentials"

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




    for (let k = 0; k < userget.length; k++) {

        if (account_number_for_fund_transfer.value == userget[k].account_number && password_for_fund_transfer.value == userget[k].password) {


            userget[k].transaction_history.push(
                {
                    amount: placeholder_to_be_changed.value,
                    transaction_type: "deposit",
                    time: time_taken
                }


            )


            userget[k].balance += Number(placeholder_to_be_changed.value)

            localStorage.setItem("account_details", JSON.stringify(userget))

            password_for_fund_transfer.style.display = "none"

            account_number_for_fund_transfer.style.display = "none"

            placeholder_to_be_changed.style.display = "none"

            deposit_button_div.style.display = "none"

            deposit_succesful_message.classList.add("deposit_message_success")

            deposit_succesful_message.innerText = "Deposit Sucessful"

            deposit_account_details.appendChild(deposit_succesful_message)

            deposit_succesful_message.style.display = "flex"

            clear_button = true

            break

        }

        else {

            password_for_fund_transfer.style.display = "none"

            account_number_for_fund_transfer.style.display = "none"

            placeholder_to_be_changed.style.display = "none"

            deposit_button_div.style.display = "none"

            deposit_succesful_message.classList.add("deposit_message_success")

            deposit_succesful_message.innerText = "Deposit Unsucessful Check Credentials"

            deposit_account_details.appendChild(deposit_succesful_message)

            deposit_succesful_message.style.display = "flex"


        }

    }

    if (clear_button = true) {


        password_for_fund_transfer.value = ""

        placeholder_to_be_changed.value = ""

    }

    else if (!clear_button) {

        password_for_fund_transfer.value = ""

        placeholder_to_be_changed.value = ""

    }


})

// -------------------------------------------------------------------------------------withdraw-------------------------------------------------------------------------------------



let clear_button_withdraw = false

withdraw_confirmation_button.addEventListener("click", () => {

    password_for_withdraw.style.display = "flex"

    account_number_for_withdrawal.style.display = "flex"

    amount_for_withdrawal.style.display = "flex"

    var theDate = new Date(Date.parse(new Date()))
    let time_taken = theDate.toLocaleString()

    for (let k = 0; k < userget.length; k++) {


        if (account_number_for_withdrawal.value == userget[k].account_number && password_for_withdraw.value == userget[k].password) {

            if (userget[k].balance >= amount_for_withdrawal.value) {

                userget[k].transaction_history.push(
                    {
                        amount: amount_for_withdrawal.value,
                        transaction_type: "withdraw",
                        time: time_taken
                    }
                )

                localStorage.setItem("account_details", JSON.stringify(userget))

                userget[k].balance -= Number(amount_for_withdrawal.value)

                localStorage.setItem("account_details", JSON.stringify(userget))

                password_for_withdraw.style.display = "none"

                account_number_for_withdrawal.style.display = "none"

                amount_for_withdrawal.style.display = "none"

                withdraw_button_div.style.display = "none"

                withdraw_succesful_message.classList.add("deposit_message_success")

                withdraw_succesful_message.innerText = "withdraw Sucessful"

                withdraw_page.appendChild(withdraw_succesful_message)

                clear_button_withdraw = true

                break


            }
            else {

                console.log("no enough balance")

                password_for_withdraw.style.display = "none"

                account_number_for_withdrawal.style.display = "none"

                amount_for_withdrawal.style.display = "none"

                withdraw_button_div.style.display = "none"

                withdraw_succesful_message.classList.add("deposit_message_success")

                withdraw_succesful_message.innerText = "Withdraw Unsucessful not Enough balance"

                withdraw_page.appendChild(withdraw_succesful_message)

                withdraw_succesful_message.style.display = "flex"

                clear_button_withdraw = true
            }



        }

        if (account_number_for_withdrawal.value != userget[k].account_number && password_for_withdraw.value != userget[k].password) {

            password_for_withdraw.style.display = "none"

            account_number_for_withdrawal.style.display = "none"

            amount_for_withdrawal.style.display = "none"

            withdraw_button_div.style.display = "none"

            withdraw_succesful_message.classList.add("deposit_message_success")

            withdraw_succesful_message.innerText = "Withdraw Unsucessful Check Credentials"

            withdraw_page.appendChild(withdraw_succesful_message)

            withdraw_succesful_message.style.display = "flex"


        }

    }

    if (clear_button_withdraw = true) {


        password_for_withdraw.value = ""

        amount_for_withdrawal.value = ""

    }

    else if (!clear_button_withdraw) {

        password_for_withdraw.value = ""

        amount_for_withdrawal.value = ""

    }


})



// ----------------------------------------------------------------------dropdown----------------------------------------------------------------------------------------------------------



hamburger_icon.addEventListener("click", () => {

    phone_authentication.showModal()
})

deposit_page_close_button.addEventListener("click", () => {


    phone_authentication.close()
})


// ------------------------------------------------------------------------------transfer button-------------------------------------------------------------------------------------------------

tranfer_page_close_button.addEventListener("click", () => {

    transfer_page.close()
})

let message_in_the_modal_in_home_page = document.createElement("div")

message_in_the_modal_in_home_page.classList.add("account_info")

message_in_the_modal_in_home_page.innerText = "PLEASE LOG IN TO AVAIL THIS FUNCTION"


fund_transfer_button.addEventListener("click", () => {


    transfer_page.showModal()

    transfer_page_details.appendChild(message_in_the_modal_in_home_page)

    amount_for_transfer.style.display = "none"

    account_number_of_the_reciever.style.display = "none"

    password_for_transfer.style.display = "none"

    transfer_confirmation_button_div.style.display = "none"

    transfer_page_details.removeChild(transfer_succesful_message)


})

// -----------------------------------------------------------------------------------------session----------------------------------------------------------------------------------------------------------
