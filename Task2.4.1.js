function printAllValues(obj){
var newArray = []
	for(let i in obj){
		newArray.push(obj[i])
return(newArray)
}
var object = { name: "RajniKanth", age: 33, hasPets: false };
var newArr = printAllValues(object)
console.log(newArr)		
		