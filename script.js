function convertTemperature() {
    // Get the temperature in Kelvin
    const kelvinInput = document.getElementById('kelvin').value;
    const kelvin = parseFloat(kelvinInput);
  
    // Convert Kelvin to Celsius
    const celsius = kelvin - 273.15;
  
    // Convert Celsius to Fahrenheit
    const fahrenheit = celsius * (9 / 5) + 32;
  
    // Round down the Fahrenheit temperature
    const roundedFahrenheit = Math.floor(fahrenheit);
  
    // Display the results
    const celsiusOutput = document.getElementById('celsius');
    const fahrenheitOutput = document.getElementById('fahrenheit');
  
    celsiusOutput.textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
    fahrenheitOutput.textContent = `Temperature in Fahrenheit: ${roundedFahrenheit}°F`;
  
    // Show the result container
    const resultContainer = document.getElementById('result');
    resultContainer.classList.remove('hidden');
  }
  