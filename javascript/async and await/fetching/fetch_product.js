let link = "https://fakestoreapi.com/products"

let item_box = document.getElementById("items_box")

async function data_fetch(student) {

    let data_to_be_fetched = await fetch(student)

    let data_fetched = await data_to_be_fetched.json()

    console.log("console inside function", data_fetched);

    return data_fetched

}

data_fetch(link).then((data)=>{

    data.map((items)=>{

        let products = document.createElement("div")
        products.classList.add("sub_items")
        item_box.appendChild(products)

        let products_bg = document.getElementsByClassName("sub_items")



    })
})

