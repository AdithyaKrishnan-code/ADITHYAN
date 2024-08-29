let link = "https://fakestoreapi.com/products"

let item_box = document.getElementById("items_box")

let main_page = document.getElementById("main_box")

let main_page_2 = document.getElementById("second_page") 

let main_page_2_item_photo =  document.getElementById("item_photo")

let name_of_product = document.getElementById("product_name")

let price_of_the_product = document.getElementById("price")

let rating_of_the_product = document.getElementById("rating")

let description_of_the_product = document.getElementById("description")

let back_button = document.getElementById("refresh_button")




main_page_2.style.display = "none"

async function data_fetch(student) {

    let data_to_be_fetched = await fetch(student)

    let data_fetched = await data_to_be_fetched.json()

    console.log("console inside function", data_fetched);

    return data_fetched

}

data_fetch(link).then((data)=>{

    data.map((items,index)=>{

        let products = document.createElement("div")

        // let details_button = document.createElement("button")

        // details_button.innerHTML = "DETAILS"

        // details_button.classList.add("details_button_style")
        
        products.setAttribute("id","sub_items")

        // products.appendChild(details_button)

        item_box.appendChild(products)

        products.style.backgroundImage = `url(${items.image})`;

        // console.log(button_function);

        products.addEventListener("click",()=>{

            item_box.style.display = "none"

            console.log(data[index]);

            main_page_2.style.display = "flex"

            main_page.appendChild(main_page_2)

            main_page_2_item_photo.style.backgroundImage = `url(${items.image})`

            name_of_product.innerHTML = JSON.stringify(data[index].title)
            
            price_of_the_product.innerHTML = "PRICE" +"  : "+ "$" + JSON.stringify(data[index].price)

            rating_of_the_product.innerHTML = "RATING" + "  :   " + JSON.stringify(data[index].rating.rate)+"/5"

            description_of_the_product.innerHTML = JSON.stringify(data[index].description)
   
        })

        back_button.addEventListener("click",()=>{

            main_page_2.style.display = "none"

            item_box.style.display = "flex"
        })

        





    })
})

