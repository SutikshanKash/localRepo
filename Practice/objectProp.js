const pperson = require('./Class')

let person = {
    firstName: 'Sutikshan',
    lastname: 'Kashyap',
    age : '29',
    fullName: function()
    {
        console.log(this.firstName+this.lastname)
    }
}

console.log(person.firstName)
console.log(person['lastname'])
person.firstName = 'Parikshit'
person.gender = 'Male'
console.log(person.gender)
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person)

for(let key in person)
{
    console.log(person[key])
}

console.log(person.fullName())

let person2 = new pperson("Rambhaj","Sharma")
console.log(person2.fullName())