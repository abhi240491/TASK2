var arr = [[["firstName","Vasanth"],["lastName",'Raja"],["age",24],["role","JSWizard"]],
[["firstName","Sri"],["lastName","Devi"],["age",28],["role","Coder"]]];

function transformEmployeeData(arr){
let tArr = []
let obj = {}
	for (let i in arr){
		for (let j in arr[i]){
			obj[arr[i][j][0]] = arr[i][j][1]
			}
		tArr.push(obj)
	}
return tArr
}
let outArr = transformEmployeeData(arr)
console.log(outArr)
