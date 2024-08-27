let link = "https://fakestoreapi.com/products"

async function data_fetch(student) {

    let data_to_be_fetched = await fetch(student)

    let data_fetched = await data_to_be_fetched.json()

    console.log("console inside function", data_fetched);

    return data_fetched

}

data_fetch(link).then(data)={}

