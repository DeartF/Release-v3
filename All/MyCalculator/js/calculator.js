var screen = document.getElementById('screen');
var result_text = '';
var result = 0;
var operator;

function setNumber (e) {
	var temp_num = e.target.innerHTML.trim();
	result_text = result_text + temp_num;
	screen.innerHTML = result_text;
}

function setOperator (e) {
	if(operator){
		result = result + result_text * 1;
	screen.innerHTML = 0;
	result_text = '';
	}
	else {
		Calculate();
	}
	operator = e.target.innerHTML.trim();
}

function Calculate () {
	if(!operator){
		return
	}

	else if(operator == '-'){
		result = result - (result_text * 1);
	}

	else if(operator == '+'){
		result = result + (result_text * 1);
	}

	else if(operator == '/'){
		if(result_text * 1 == 0){
			return
		}
		result = result / (result_text * 1);
	}

	else if(operator == '*'){
		result = result * (result_text * 1);
	}


	screen.innerHTML = result;
	result_text = '';
}

function x2() {
	result_text = Math.pow(result_text, 2);

	screen.innerHTML = result_text;

}

function x3() {
	result_text = Math.pow(result_text, 3);
	screen.innerHTML = result_text;
}

function x4() {
	result_text = Math.pow(result_text, 4);
	screen.innerHTML = result_text;
}


function Reset() {
	result_text = '';
	result = 0;
	operator = undefined;
	screen.innerHTML = 0;
}