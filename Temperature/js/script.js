var toFarenheit = function(celsius) {
	return celsius*32;};

var toCelsius = function(farenheit) {
	return farenheit/32;};

	var celsius = prompt("Enter temperature in degrees celsius:");
	var farenheit = prompt("Enter temperature in farenheit degrees");

	var result = toCelsius(farenheit);

	alert(result+ " farenheit.");

