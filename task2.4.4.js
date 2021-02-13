var arr = ["GUVI","I","am","a geek"];
function transformFirstAndLast(arr){
let obj = {}
obj[arr[0]] = arr[arr.length-1]
return (obj)
}

let object = transformFirstAndLast(arr)
console.log(object)
