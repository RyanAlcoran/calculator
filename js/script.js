function add(a, b){
	return a + b;
}

function subtract(a, b){
	return a - b;
}

function multiply(a, b){
	return a * b;
}

function divide(a, b){
	return a / b;
}

function operate(func, a, b){
	return func(a, b);
}

console.log(`4 + 3 = ${add(4, 3)}`);
console.log(`8 - 12 = ${subtract(8, 12)}`);
console.log(`6 * 9 = ${multiply(6, 9)}`);
console.log(`15 / 3 = ${divide(15, 3)}`);

console.log(`6 + 6 = ${operate(add, 6, 6)}`);