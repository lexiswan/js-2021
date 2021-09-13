// functioneaza pentru ca x este "hoisted"
x = 10
//eroare pentru ca y nu este "hoisted"
//y = 20

console.log(x)

//eroare pentru ca z nu este "hoisted"
//console.log(z)

test()

//eroare deoarece clasa Hello nu este "hoisted"
let w = new Hello()

// declaratia variabliei este ridicata la inceput => hoisted
var x
let y
const z = 3

function test() {
    console.log("test")
}
class Hello {
    messageno
}

