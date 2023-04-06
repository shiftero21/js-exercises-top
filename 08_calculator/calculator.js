const add = function(a, b) {
  return a + b
	
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0); //sumatoria de todos los elementos 
};

const multiply = function(array) {
  return array.length //Si el array está vacío, entonces array.length es falso o igual a cero. 
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem) // no se establece un valor inicial para el acumulador (accumulator) en el método reduce. Por defecto, el valor inicial del acumulador es el primer elemento del array, y la multiplicación comienza a partir del segundo elemento. Si el valor inicial coincide con el valor del primer elemento del array no se realiza esa multplicacion y la misma comenzaria a partir del 2do elemento.
    : 0;
};

const power = function(a, b) {
  return Math.pow(a, b);

};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
