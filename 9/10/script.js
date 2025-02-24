let askWord = [];

let exerciseAmountString = '<form><label >Выберите количество заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


document.getElementById('exerciseAmount').innerHTML += exerciseAmountString
//document.getElementById('exerciseAmount').innerHTML += '<input type="button" onclick = "exercise()" value="⇄ Сгенерировать" />'
function exerciseTypeOne(Num) {
	let outputText ='<strong>' + (Num+1) + '.</strong> Среди приведенных ниже трех чисел, записанных в различных системах счисления, найдите ';
	const maxORmin = Math.floor(Math.random() * 2);
	if (maxORmin == 0) {
		outputText += 'минимальное';
	}
	else if (maxORmin == 1) {
		outputText += 'максимальное';
	}
	outputText += ' и запишите его в ответе в десятичной системе счисления. В ответе запишите только число, основание системы счисления указывать не нужно.<br>';
	const number_1 = Math.floor(Math.random() * (100-30) + 30);
	const number_2 = Math.floor(Math.random() * (100-30) + 30);
	const number_3 = Math.floor(Math.random() * (100-30) + 30);
	outputText += number_1.toString(16).toUpperCase() + '<sub>16</sub>, ' + number_2.toString(8) + '<sub>8</sub>, ' + number_3.toString(2) + '<sub>2</sub>.';
	let outputCorrectAnswer = 0;
	if (maxORmin == 0) {
		let minimum = number_1;
		if (number_2  < minimum) {
			minimum = number_2;
		}
		if (number_3  < minimum) {
			minimum = number_3;
		}
		outputCorrectAnswer = minimum;
	}
	else if (maxORmin == 1) {
		let maximum = number_1;
		if (number_2  > maximum) {
			maximum = number_2;
		}
		if (number_3  > maximum) {
			maximum = number_3;
		}
		outputCorrectAnswer = maximum;
	}
	return [outputText,outputCorrectAnswer.toString()];
}
function exerciseTypeTwo(Num) {
	const outputCorrectAnswer = Math.floor(Math.random() * (200-50) + 50);
	let outputText ='<strong>' + (Num+1) + '.</strong> Переведите данное число в десятичную систему счисления: <strong>' + outputCorrectAnswer.toString(2) + '</strong><sub>2</sub>.<br>Запишите полученное число в ответ, систему счисления указывать не надо.';
	return [outputText,outputCorrectAnswer.toString()];
}
let Amount = 0;
function exercise () {
	Amount = document.getElementById('exerciseAmountNum').value
	document.getElementById('exerciseAmount').innerHTML = ''
	for (let Num = 0; Num < Amount; Num++) {
		document.getElementById('exercise1').innerHTML += '<div id = "example' + Num + '"></div><br><div class="form-example"><input type="text" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="Проверить результат" /></div><div id = "otvet' + Num + '"></div><h2></h2>'
			
		document.getElementById('otvetPole' + Num ).value = ''
		document.getElementById('otvet' + Num ).innerHTML = ''
		randomExercise = Math.floor(Math.random() * 4);
		let output = '';
		if (randomExercise == 0 || randomExercise == 1 || randomExercise == 2)  {
			output = exerciseTypeOne(Num)
		}
		else if (randomExercise == 3) {
			output = exerciseTypeTwo(Num)
			
		}
		askWord[Num] = output[1]
		document.getElementById('example' + Num ).innerHTML += output[0]
		
	}
	
}
let correct = [];
let incorrect = [];
for (let i = 0; i < 100; i++ ) {
	correct[i] = 0;
	incorrect[i] = 0;
}
function attempt(Num) {
		
		otvet = document.getElementById('otvetPole' + Num).value.toString();
		if (correct[Num] != 1) {
			if (otvet.trim().toLowerCase() == askWord[Num].trim().toLowerCase() ) {
				
				document.getElementById('otvet' + Num).innerHTML = '<br>✔ Правильно!<br>'
				document.getElementById('otvet' + Num).style.color = 'green'
				correct[Num] = 1
				document.getElementById('otvetPole' + Num).disabled  = true;
				document.getElementById('knopka' + Num).style.display  = 'none';
			}
			else if (otvet.trim() == '') {
				document.getElementById('otvet' + Num).innerHTML = ''
			}
			else {
				document.getElementById('otvet' + Num).innerHTML = '<br>✖ Неверно<br>'
				document.getElementById('otvet' + Num).style.color = 'red'
				incorrect[Num] += 1
				
			}
		}
		let correctCounter = 0;
		let incorrectCounter = 0;
		for (let i = 0; i < correct.length; i++ ) {
				correctCounter += correct[i]
		}
		for (let i = 0; i < incorrect.length; i++ ) {
				incorrectCounter += incorrect[i]
		}
		document.getElementById('counter').innerHTML = 'Правильных ответов: ' + correctCounter + ', неправильных: ' + incorrectCounter;
		percent = ((correctCounter/Amount)*100).toFixed(2);
		document.getElementById('counter').innerHTML += ' <br>Процент правильных ответов: ' + percent + '% ';
		
	}