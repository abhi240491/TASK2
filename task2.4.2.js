function printAllKeys(obj){
var allKeys = []
	for(let i in obj)
		allKeys.push(i)
return(allKeys)
}

var object = { name: "RajniKanth", age:25, hasPets: true}
var allKeys = printAllKeys(object)
console.log(allKeys)