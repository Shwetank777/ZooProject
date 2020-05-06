function increase1() {
	var text = document.getElementById("indian-ticket");
	var y = parseInt(text.value);
	y = y + 1;
	text.value = y;
	calc(1, 50);
}
function decrease1() {
	var text = document.getElementById("indian-ticket");
	var y = parseInt(text.value);
	if (y != 0) {
		y = y - 1;
		text.value = y;
		calc(-1, 50);
	}
}
function increase2() {
	var text = document.getElementById("foreign-ticket");
	var y = parseInt(text.value);
	y = y + 1;
	text.value = y;
	calc(1, 300);
}
function decrease2() {
	var text = document.getElementById("foreign-ticket");
	var y = parseInt(text.value);
	if (y != 0) {
		y = y - 1;
		text.value = y;
		calc(-1, 300);
	}
}
function calc(a, b) {
	var y = a * b;
	var sum = parseInt(document.getElementById("amount").value) + y;
	var x = document.getElementById("amount");

	x.value = sum;
}
