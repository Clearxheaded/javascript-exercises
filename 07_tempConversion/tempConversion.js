const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * 5/9;
  if (celsius === 0) return 0;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * 1.8) + 32;
  if (fahrenheit === 0) return 0;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
