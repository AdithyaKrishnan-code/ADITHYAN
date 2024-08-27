let search_bar = document.getElementById("search_bar")

let suggestion_box = document.getElementById("text")

let main = document.getElementById("mainpage")

// console.log(suggestion_box);

let result = []

// async function to fetch json

async function data_fetch(student) {


    let data_to_be_fetched = await fetch(student)

    let data_fetched = await data_to_be_fetched.json()

    console.log("console inside function", data_fetched);

    return data_fetched
}
// ------------------------------------------------------------------------

// promise function

data_fetch("student.json").then((data) => {

    console.log("inside then", data);

    search_bar.addEventListener("input", () => {

        let value = search_bar.value.toLowerCase()

        console.log(value);

        suggestion_box.innerHTML = ""

        // datamap---------------------------------------------------------------------------------------
       
        data.map((e, index) => {

            if (!value) {

                suggestion_box.innerHTML = ""

            }
            else {

                if (e.Name.toLowerCase().includes(value)) {

                    let text_names = document.createElement("div")
                    text_names.id = "text_data"
                    text_names.innerText = e.Name
                    suggestion_box.appendChild(text_names)

                    let button = document.createElement("button")
                    button.innerHTML = "details"
                    button.id = "butt"
                    text_names.appendChild(button)

                    button.addEventListener("click", () => {

                        let boxes_to_be_removed = document.getElementById("text_data")

                        console.log(boxes_to_be_removed)

                        suggestion_box.style.display = "none"
                        search_bar.style.display = "none"

                        let new_page = document.createElement("div")

                        let name = JSON.stringify(data[index].Name)
                        let email = JSON.stringify(data[index].Email)
                        let ph_num = JSON.stringify(data[index].Phone_number)
                        let address = JSON.stringify(data[index].Address)


                        new_page.innerHTML = JSON.stringify(data[index])
                        new_page.innerHTML = "Name " + name + "<br>" + email + "<br>" + ph_num + "<br>" + address
                        main.appendChild(new_page)


                        console.log(index)

                        console.log(data[index])

                    })

                }
            }




        })
    })

})






