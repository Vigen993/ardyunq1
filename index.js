let name = "Ashot"
var age = 15
const surname = "Movsisyan"

let myH1 = document.createElement("h1")
myH1.textContent = "Welcome"
document.body.appendChild(myH1)

let x = 1
let y = 1
let z = x + y
console.log(`${z} - this is 3.1 exersize`);

let country = "Armenia"
console.log(country + ` - this is 3.2`);

let testBool = 10 < 9

let array = [
    {
        name: "Ashot",
        surname: "Hakobyan",
        age: 55
    },
    {
        name: "Armen",
        surname: "Minasyan",
        age: 36
    },
    {
        name: "Sara",
        surname: "Movsisyan",
        age: 21
    },
]

const date = new Date()
console.log(date);

console.log(typeof testBool);
console.log(typeof country);
console.log(typeof age);