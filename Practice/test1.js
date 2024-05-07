var str = "hello this is sutikshan kashyap"
console.log(str.split("").reverse().join(''))
var str2 = ""
for( let i=str.length-1;i>=0;i--)
    {
        str2 = str2+ str[i]
    }
    console.log(str2)


var arr = [1,2,3,4,5,6,7,8]
var avai = ""
for(var i=0;i<arr.length;i++)
    {   
        avai = ""
        if(arr[i]===9)
            {
                avai = "Item is available"
                break;
            }
            else{
                avai = "Item is not Available"
            }
    }

    console.log(avai)

    var arra1 = [1,2,3,4,5,6,7]
    var arra2 = [].concat(arra1)
    console.log(arra1)
    console.log(arra2)

    var even =  [];
    arra1.forEach(element => {
        if(element%2==0)
            {
                even.push(element)
            }
    });
    console.log(even)

    var evenCount  = 0
    var oddCount = 0
    arra1.forEach(element=>{
        if(element%2==0)
            {
                evenCount++
            }
        else{
            oddCount++
        }
    })
    console.log("even count is "+evenCount)
    console.log("odd count is "+oddCount)

    console.log(2.3+4.3)

    var sor = [2,31,3,53,8,654,7]
     var sortedArray = (sor.sort((a,b)=>a-b))
    console.log(sortedArray)
    console.log(sortedArray[sortedArray.length-1])
    var sor1 = [2,31,3,53,8,654,7]
    for(let i=0;i<sor1.length;i++)
        {
            for(var j=i+1;j<sor1.length;j++)
                {
                    if(sor1[i]>sor1[j])
                        {
                            var temp = sor1[i]
                            sor1[i] = sor1[j]
                            sor1[j] = temp
                        }
                }
        }
        console.log(sor1)


    
        
    