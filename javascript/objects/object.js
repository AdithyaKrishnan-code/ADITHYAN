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

const data = JSON.stringify(obj)

console.log(JSON.parse(data));