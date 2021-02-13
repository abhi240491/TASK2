var arr = [["make","Ford"],["model","Mustang"],["year",1964]]
function fromListToObject(arr){
	let obj = {}
	for(let i in arr){
		obj[arr[i][0]] = arr[i][1]
	return(obj)
	
let object = fromListToObject(arr)
console.log(object)