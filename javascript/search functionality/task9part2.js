let task = document.getElementById("search")
let add_button = document.getElementById("addbutton")
let task_list = document.getElementById("tasks")
let delete_button = document.getElementById("deletebutton")
let darkm = document.getElementById("darkmode")
let darkmode_settings = localStorage.getItem("dark_mode")

// array of tasks

let things_to_do = []

// ---------------------------------------------------------------------------

// function to add  aalong with buttons tasks to the array

let d_b

function add_tasks() {

    things_to_do.push(task.value)

    task_list.innerHTML = ""

    task.value = ""


    for (let i = 0; i < things_to_do.length; i++) {

        let items = document.createElement("div")

        let text = document.createElement("div")

        items.setAttribute("id", i)

        text.setAttribute("id", "box" + i)


        let del_button = document.createElement("button")

        let edit_button = document.createElement("button")

        del_button.innerHTML = "DELETE"

        edit_button.innerHTML = "EDIT"

        text.innerHTML = things_to_do[i]



        task_list.appendChild(items)

        items.appendChild(text)

        items.appendChild(del_button)

        items.appendChild(edit_button)

        // event listener for delete button

        del_button.addEventListener("click", () => {
            sample(i)
        })

        edit_button.addEventListener("click", () => {
            edit(i, things_to_do)
        })

    }

}

// function to delete using delete button on the side


function sample(count) {

    // console.log("object"+count);

    let dels = document.getElementById(count)
    things_to_do.splice(count, 1)
    dels.remove()
}
// function to edit using edit button on the side


function edit(count, array) {

    // console.log("object"+count);

    let edits = document.getElementById("box" + count)

    let a = prompt("enter your new task", array[count])

    edits.innerHTML = a

    things_to_do[count] = a

}










// -------------------------------------------------------------------------------------------------------------------------

// event listeners


add_button.addEventListener("click", add_tasks)



task.addEventListener("keydown", (e) => {

    if (e.code == 'Enter') {

        add_tasks()

    }

})


// -----------------------------------------------------

// function for space bar edits

document.body.addEventListener("keydown", (e) => {



    if (e.code == 'Space') {

        console.log("hello");
        console.log(e);

        let b = prompt("enter your name")

        alert("your name is " + b)
    }

})

// ------------------------------------------------------------------------------------------------------------------------------



// darkmode

const enable_dmode = () => {

    document.body.classList.add("dark")

    localStorage.setItem("dark_mode", "enabled")


}
const disable_dmode = () => {


    document.body.classList.remove("dark")

    localStorage.setItem("dark_mode" , null )


}


if(darkmode_settings === "enabled"){

    enable_dmode()
}



darkm.addEventListener("click", () => {

    darkmode_settings = localStorage.getItem("dark_mode")
    
    if ( darkmode_settings !== "enabled") {

        enable_dmode()
    }else{

        disable_dmode()
    }
})