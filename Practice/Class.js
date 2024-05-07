module.exports = class Person
{
    age = 29
    constructor(firstName,LastName)
    {
        this.firstName = firstName
        this.LastName = LastName
    }

    get location()
    {
        return "India"
    }

    fullName()
    {
        console.log(this.firstName+this.LastName)
    }

}

// let person = new Person("Sutikshan","Kashyap")
// let person1 = new Person("Parikshit","Kashyap")
// console.log(person.location)
// person.fullName()
// person1.fullName()
// console.log(person.age)
