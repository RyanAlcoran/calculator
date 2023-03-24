let input = '';
let display = ''
let firstOperand = '';
let secondOperand = '';
let operator = '';

const results = document.querySelector('.results');

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		let value = btn.textcontent;
		//console.log(btn.getAttribute('data-type'));
		switch (btn.getAttribute('data-type')) {
		case 'clear':
			clear();
			break;
		case 'backspace':
			backspace(input);
			break;
		case 'num':
			//if (input.length < 9) {
			input += value;
			results.textContent = input;
			//}
			break;
		case 'operator':
			if (operator.length() > 0 && secondOperand.length() > 0 && firstOperand.length() > 0) {
				let result = operate(operator, firstOperand, secondOperand);
				results.textContent = result;
				firstOperand = result;
				secondOperand = '';
				operator = value;
				input = '';
			}
			firstOperand = input;
			operator = value;
			input = '';
			break;
		case 'operate':
			let result = operate(operator, firstOperand, secondOperand);
			results.textContent = result;
			input = '';
			break;
		default:
			console.log("does not match");
		}
		
	});
});
// Buttons
// const btnsNum = document.querySelectorAll('.btn.num');
// btnsNum.forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		if (input.length < 9) {
// 			input += btn.textContent;
// 			results.textContent = input;
// 		}
// 	});
// });

// const btnClear = document.querySelector('[data-value="clear"]');
// btnClear.addEventListener('click', clear);

// const

// const btnsOp = document.querySelectorAll('.btn.op');
// btnsOp.forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		operator = btn.getAttribute('data-value');
// 		input += ` ${btn.textContent} `;
// 	});
// });

function backspace(string) {
	input = string.slice(0, -1);
	results.textContent = input;
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
	return func(a, b);
}