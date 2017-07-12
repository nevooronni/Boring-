var bmi = function(height, weight) {
	return (weight/height)/height;};

var weight = prompt("Enter your weight in kg's:");
var height = prompt("Enter your height in meters:");

var result = bmi(height,weight);
alert(result);
