
var sum = findSum([1,2,3]);

console.log("sum of numbers : " +sum);


var sum1 = findSum([10,20,30,40,50]);

console.log("sum of numbers : " +sum1);

function findSum(arr) {
	var sum = 0;

	for(var i=0;i<arr.length;i++){
		sum += arr[i];
	}

	return sum;
}