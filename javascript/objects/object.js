let obj = {
    name : "adhithyan",
    age : 10,
    mark : [
        100,100,100
    ],
    aadress : {
        state : "kerala",
        district : "Palakkad"
    }
}

obj.grade = "A+"

console.log(aadress.state)

const data = JSON.stringify(obj)

console.log(JSON.parse(data));