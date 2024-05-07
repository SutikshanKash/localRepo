var str = 'hello'
var newStr = str.split('').reverse().join('').trim()
if(str===newStr)
{
    console.log("palindrome")
}
else{
    console.log('not plaindrome')
}

var str2 = "hello"
console.log(str2.toUpperCase())
var str = "ramramwedf"
var answer = "";
    var freq = [];
    for (i = 0; i < str.length; i++) {
        let char = str[i];
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1
            answer = answer + char;
        }
    }
    console.log(answer)

    console.log("30"+20+30)