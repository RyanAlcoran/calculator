let input = '';
let firstOperand = '';
let secondOperand = '';
let operator = '';

const results = document.querySelector('.results');

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		let value = btn.textContent;
		//console.log(btn.getAttribute('data-type'));
		switch (btn.getAttribute('data-type')) {
		case 'clear':
			clear();
			break;
		case 'backspace':
			backspace(input);
			break;
		case 'num':
			if (firstOperand.length > 0 && operator.length === 0) {
				firstOperand = '';
				input = '';
			}
			input += value;
			results.textContent = input;
			break;
		case 'operator':
			if (operator.length > 0) {
				calculate();
				operator = btn.id;
				input = '';
			}
			firstOperand = input;
			operator = btn.id;
			input = '';
			break;
		case 'operate':
			calculate();
			operator = '';
			input = results.textContent;
			break;
		default:
			console.log("does not match");
		}
		
	});
});

function backspace(string) {
	input = string.slice(0, -1);
	if (input.length <= 0) {
		clear();
	} 
	else {
		results.textContent = input;
	}
}

function clear() {
	input = '';
	firstOperand = '';
	secondOperand = '';
	operator = '';
	results.textContent = '0';
}

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
	return window[func](a, b);
}

// Round to the nearsest one thousandths
function round(num) {
	return Math.round((num + Number.EPSILON) * 1000) / 1000;
}

function calculate() {
	secondOperand = input;
	let result = round(operate(operator, +firstOperand, +secondOperand)).toString();
	results.textContent = result;
	firstOperand = result;
	secondOperand = '';
}