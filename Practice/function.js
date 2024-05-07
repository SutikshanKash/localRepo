const abc = require('./Class')
function add(a,b)
{
    return a+b
}

sum = add(2,3)
console.log(sum)

// function do not have name = > Anoyumus functions -- Function Expresions

let sumOfIntegers = function(c,d)
{
    return c+d
}

let sumOfNumbers = (a,b) => a+b

let person = new abc("Hello","World")
person.fullName()