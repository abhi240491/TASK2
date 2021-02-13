var expected = {foo: 5, bar:6}
var actual = {foo:5, bar:6}

function assertObjectsEqual(actual, expected, testName){
if(testName === "detects that two objects are equal")
if(JSON.stringify(actual) === JSON.stringify(expected)
	console.log("passed")
else
	console.log("FAILED \[my test\] Expected",expected," but got",actual)
}

assertObjectsEqual(actual,expected,'detects that two objects are equal')
