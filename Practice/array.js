var newArray = [12,23,43,5456,7674,34]
console.log(newArray.sort((a,b)=>a-b))
console.log(newArray[newArray.length-1])
for(let i = 0;i<newArray.length;i++)
{
    console.log(newArray[i])
}
let newMark = newArray.reduce((sum,mark)=>sum+mark,0)
console.log(newMark)

evenOddArray = newArray.filter(evenOdd=>evenOdd%2==0).map(evenOd=>evenOd*3).reduce((sum,multiple)=>sum+multiple,0)
console.log(evenOddArray)

// multiple3 = evenOddArray.map(multiply=>multiply*3).reduce((sum,multiple)=>sum+multiple,0)
// console.log(multiple3)

// SumMultiple = multiple3.reduce((sum,multiple)=>sum+multiple,0)
// console.log(SumMultiple)

var sortMethod = [1,2,10,3,78,4]
console.log(sortMethod.sort((a,b)=>b-a))

let original = "Hello";
let reversed = original.split('').reverse().join('');
console.log(reversed);

var str = "new world"
let reverse = ""
for(i=str.length-1;i>=0;i--)
{
    reverse+=str[i];
}
console.log(reverse)

var num = 123
var rev=0,rem=0
while(num>0)
{
    rem = num%10;
    rev = rev*10+rem
    num = num/10
}
console.log(rev)

var n = 352, revers = 0, remainder;

while (n>0) {
    remainder = n%10;
    revers = revers * 10 + remainder;
    n = Math.floor(n / 10);
}

console.log(revers);
var number = 12212
var reve = number.toString().split('').reverse().join('')
console.log(Number(reve))
console.log(typeof(number))