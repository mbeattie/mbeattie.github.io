
function resetDisplay() {
	document.getElementById('parameters').style.display = '';
	document.getElementById('questions').style.display = 'none';
	document.getElementById('restart').style.display = 'none';
	document.getElementById('result').innerHTML='';
	document.getElementById('score').innerHTML = '';

}

function getOtherNumber(number, operation) {
		if (operation === '+') {
				otherNum = Math.floor(Math.random() * 11);
				return otherNum;
		} else {
				otherNum = Math.floor(Math.random() * 11);
				otherNum = otherNum + number;
				return otherNum;
		}
}

function askQuestion(number, numquestions, operation) {
	let otherNum = getOtherNumber(number, operation);
	if (operation === '-') {
			[otherNum, number] = [number, otherNum];
	} else {
			if (Math.random() > 0.5) {
					[otherNum, number] = [number, otherNum];
			}
	}
	let html = '';
	html += `<span id="qnumber" >${number}</span>`;
	html += `<span id="qoperation" >${operation}</span>`;
    html += `<span id="qothernum" >${otherNum}</span>` ; 
	document.getElementById('problem').innerHTML = html;
	document.getElementById('left').innerHTML = numquestions;
}


function getCorrectAnswer() {
	var number = parseInt(document.getElementById('qnumber').innerHTML);
	var operation = document.getElementById('qoperation').innerHTML;
	var othernumber = parseInt(document.getElementById('qothernum').innerHTML);
	if (operation === '+') {
			let answer = number + othernumber;
			return answer;
	} else {
			let answer = number - othernumber;
			return answer;
	}
}

function workComplete() {
	numQuestions = parseInt(document.getElementById('numquestions').value);
	right = parseInt(document.getElementById('numquestions').value); //TODO: handle a score
	document.getElementById('score').innerHTML = "You answered " + numQuestions + " questions!";
	document.getElementById('restart').style.display = '';
}

document.getElementById('questions').style.display = 'none';
document.getElementById('restart').style.display = 'none';
document.getElementById('restartbtn').addEventListener('click', () => {
		resetDisplay();
});

document.getElementById('askquestions').addEventListener('click', () => {
	var number = parseInt(document.getElementById('number').value);
	var numquestions = parseInt(document.getElementById('numquestions').value);
	var operation = document.getElementById('operation').value;

	var parameters = document.getElementById('parameters');
	var questions = document.getElementById('questions');

	parameters.style.display = 'none';
	questions.style.display = '';

	document.getElementById('response').value='';	
	document.getElementById('response').focus();
	askQuestion(number, numquestions, operation);
});

function handleSubmit() {
	let answer = document.getElementById('response').value;	
	let numQuestions = parseInt(document.getElementById('left').innerHTML);
	if (answer == getCorrectAnswer()) {
		document.getElementById('result').innerHTML="Correct!";
			if (numQuestions == 1) {  //off by one here since it starts from the other button
				workComplete();
			} else {
				askQuestion(parseInt(document.getElementById('number').value),
							numQuestions - 1,
							document.getElementById('operation').value);
				document.getElementById('response').value='';	
				document.getElementById('response').focus();
			}
	} else {
		document.getElementById('result').innerHTML="Sorry, that's incorrect";
		document.getElementById('response').value='';	
		document.getElementById('response').focus();
		document.getElementById('response').select();
		console.log(getCorrectAnswer());
	}
}

document.getElementById('submit').addEventListener('click', () => {
		handleSubmit();
});
document.getElementById('response').onkeydown = (event) => {
	if (event.keyCode == 13) {
			handleSubmit();
	}
}

