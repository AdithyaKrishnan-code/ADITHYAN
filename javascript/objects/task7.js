// the object


let college_id_num = Math.floor(Math.random() * 100)

let student = {

    college_id: college_id_num,
    name: "notime",
    email: "notime@gmail.com",
    phone_num: "9999999999",
    address: {

        house_number: "",
        street_name: "",
        pin_number: "",
        country: ""
    },
    subject: [{ sub: "math", marks: "98" }, { sub: "chemistry", marks: "80" }, { sub: "physics", marks: "89" }],


    applied_for_scholarship: false


}
// -------------------------------------------------------------------------------------------------------------------------------------

// function to change name

function change_name(newname) {

    student.name = newname

}

// function to change phone number

function change_num(newnum) {

    if (newnum) {
        student.phone_num = newnum
    }
}


// function to change address

function change_add(house, street, pin, country) {

    student.address.house_number = house
    student.address.street_name = street
    student.address.pin_number = pin
    student.address.country = country

}


// function to add new subject and marks

function add_newsub(sub, mark) {

    student.subject.push({ subject: sub, marks: mark })





}


// function to remove the subject

function remove_sub(item_to_be_deleted) {

    for (let i = 0; i < student.subject.length; i++) {


        if (student.subject[i].sub == item_to_be_deleted) {

            student.subject.splice(i, 1)


        }


    }




}

// function  for changing the mark

function change_mark(name, mark) {

    for (let j = 0; j < student.subject.length; j++) {


        if (student.subject[j].sub == name) {

            student.subject[j].marks = mark


        }


    }



}

// function to get the sum of all the marks

function tot_marks() {

    let tot = 0
    for (let k = 0; k < student.subject.length; k++) {

        tot = tot + parseInt(student.subject[k].marks)

    }
    return tot
}





// -----------------------------------------------------switch case-----------------------------------------------------------------------------------------------

let z = true

while (z) {
    let choice = parseInt(prompt("enter your choice  1.change name , 2.change number , 3.change address , 4.subject editing, 5.scholarship status, 6. add age , 7. total mark of subjects , 8.exit"))
    switch (choice) {

        case 1:
            let a = prompt("enter your name")
            change_name(a)
            console.log(student);
            break;


        case 2:

            let b = prompt("enter your num")
            change_num(b)
            console.log(student);
            break;



        case 3:
            {


                let ques = prompt("do you want to change you adresss")
                if (ques == "yes") {

                    h = prompt("enter your house number")
                    s = prompt("enter your street name")
                    p = prompt("enter your pin code")
                    c = prompt("enter your country")
                    change_add(h, s, p, c)
                } else { console.log("ok") }
                console.log(student);
                break;
            }

        case 4: {

            let x = true
            let sub_choice = prompt("enter your sub choice 1.add new subject and marks 2.to remove a subject 3.edit mark 4.display subjects 6. exit")





            if (sub_choice == 1) {
                console.log("add new subject and mark: ");
                new_sub = prompt("enter the new subject: ")
                new_mark = prompt("enter new subject s mark: ")

                add_newsub(new_sub, new_mark)


            }
            else if (sub_choice == 2) {

                sub_to_remove = prompt("enter the name of the subject to be removed ")
                remove_sub(sub_to_remove)




            }

            else if (sub_choice == 3) {

                sel_sub = prompt("enter the name of the subject whose mark has to be change")
                new_mark = prompt("enter the new mark ")

                change_mark(sel_sub, new_mark)

            }
            else if (sub_choice == 4) {

                console.log(student.subject);
            }
            else { x = false }

            console.log(student.subject)
            break;

        }




        case 5: {

            console.log("current stauts of scholarship", student.applied_for_scholarship)
            scho_choice = prompt("do you want to change the stauts of the scholarship??")
            if (scho_choice = "yes") {

                student.applied_for_scholarship = true
            }
            else if (scho_choice = "no") {

                student.applied_for_scholarship = false
            }
            console.log("changed status of scholarship ", student.applied_for_scholarship)
            break;


        }




        case 6: {

            new_val = prompt("the the value ")
            student.age = new_val
            console.log(student)
            break;




        }



        case 7: {

            console.log("the total mark of all subjects are", tot_marks());
            break




        }


        case 8: {

            z = false

            break;
        }




    }
}

// // student.house_number = "1"
// // console.log(student.name)

