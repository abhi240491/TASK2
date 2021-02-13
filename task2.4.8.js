var array = [1, 2,3, 4,6 ,6 ,6,2,4,9]
var odd = function(arr){
	return arr.filter((item) => item%2 === 0)
	}
var newarr = odd(array)
console.log(newarr)