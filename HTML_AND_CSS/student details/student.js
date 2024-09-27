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



        let value = search_bar.value

        console.log(value);
        
        suggestion_box.innerHTML = " "

        data.map((e) => {
            
            if(!value){

                suggestion_box.innerHTML = ""
                
            }
            
            if ( e.Name.includes(value)) {
                
                let box = document.createElement("p")
                
                console.log(e.Name);

                box.innerText = e.Name

                console.log(box);

                console.log(suggestion_box);

                suggestion_box.appendChild(box)

            } else {

                suggestion_box.innerHTML = ""
            }

        })
    })

})






