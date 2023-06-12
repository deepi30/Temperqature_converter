function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitOutput = document.getElementById("fahrenheit");
  
    var celsius = parseFloat(celsiusInput);
    var fahrenheit = (celsius * 9/5) + 32;
  
    fahrenheitOutput.value = fahrenheit;
}

function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var celsiusOutput = document.getElementById("celsius");
  
    var fahrenheit = parseFloat(fahrenheitInput);
    var celsius = (fahrenheit - 32) * 5/9;
  
    celsiusOutput.value = celsius;
}
