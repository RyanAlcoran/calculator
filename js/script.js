let display = '';
const results = document.querySelector(".results");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
	btn.addEventListener("click", () => {
	console.log(btn.getAttribute("data-value"));
	display += btn.getAttribute("data-value");
	results.textContent = display;
	});
});

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