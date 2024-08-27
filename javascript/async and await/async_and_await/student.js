let search_bar = document.getElementById("search_bar")

let suggestion_box = document.getElementById("text")

console.log(suggestion_box);

let result = []


async function data_fetch(student) {


    let data_to_be_fetched = await fetch(student)

    let data_fetched = await data_to_be_fetched.json()

    console.log("console inside function", data_fetched);

    return data_fetched
}

data_fetch("student.json").then((data) => {

    console.log("inside then", data);

    search_bar.addEventListener("input", () => {

        let value = search_bar.value.toLowerCase()

        console.log(value);

        suggestion_box.innerHTML = ""

        data.map((e) => {

            if(!value){

                suggestion_box.innerHTML = ""

            }
            else{

                if(e.Name.toLowerCase().includes(value)){

                    let text_names = document.createElement("div")
                    text_names.id = "text_data"
                    text_names.innerText = e.Name
                    suggestion_box.appendChild(text_names)

                    let button = document.createElement("button")
                    button.innerHTML = "details"
                    button.id = "butt"
                    text_names.appendChild(button)

                    console.log(e.Name)
                }
            }




        })
    })

})






