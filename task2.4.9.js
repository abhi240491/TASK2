var students = [
	{name: "Siddharth", age:31},
	{name: "Malar", age: 17},
	{name: "Maari", age: 18},
	{name: "BaahuBali", age: 23},
	{name:"MunnaBhai", age 19}
	]
	
var underage = function(arr){
	return arr.filter((item)=> item.age<20)
	}

var newarr = underage(students)
console.log(newarr)