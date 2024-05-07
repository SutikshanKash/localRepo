const Person = require('./Class')
class SubClass extends Person
{
    constructor(firstName,LastName)
    {
        super(firstName,LastName)
    }
   

}
let subclass = new SubClass("Poonam","Sharma")
subclass.fullName()
console.log(subclass.location)