let task = document.getElementById("search")
let add_button = document.getElementById("addbutton")
let task_list = document.getElementById("tasks")
let delete_button = document.getElementById("deletebutton")

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
            edit(i)
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


function edit(count) {

    // console.log("object"+count);

    let edits = document.getElementById("box" + count)

    let a = prompt("enter the new task ")

    edits.innerHTML = a

    things_to_do[count] = a



}



function delete_tasks() {

    for (let j = 0; j < things_to_do.length; j++) {



        if (task.value == things_to_do[j]) {
            let list = document.createElement("li")
            list.innerHTML = things_to_do.splice(j, 1)
            task_list.appendChild(list)
        }

        task_list.innerHTML = ""



    }

    for (let i = 0; i < things_to_do.length; i++) {
        let list = document.createElement("li")
        list.innerHTML = things_to_do[i]
        task_list.appendChild(list)

    }
}






// -------------------------------------------------------------------------------------------------------------------------

// event listeners


add_button.addEventListener("click", add_tasks)



task.addEventListener("keydown", (e) => {

    if (e.code == 'Enter') {

        add_tasks()

    }

})




// function for space bar edits

document.body.addEventListener("keydown", (e) => {



    if (e.code == 'Space') {

        console.log("hello");
        console.log(e);

        let b = prompt("enter your name")

        alert("your name is " + b)
    }

})






