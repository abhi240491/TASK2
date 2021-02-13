function convertObjectToList(obj){
let arrayOfArray = []
for(let i in obj)
	arrayOfArray.push([i,[obj[i]])
	return(arrayOfArray)
	}

var object = { name: "ISRO", age:35, role: "Scientist"}
var arrOfArr = convertObjectToList(object)
console.log(arrOfArr)
	