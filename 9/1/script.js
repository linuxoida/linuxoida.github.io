let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString
$("#exerciseAmount").html(exerciseAmountString);
function exerciseTypeOne(Num) {
	const bits = [8,16,32]
	const kolvoBit = bits[Math.floor(Math.random() * 3)]
	let outputText ='<strong>' + (Num+1) + '.</strong> В одной из кодировок каждый символ кодируется ' + kolvoBit + ' битами.<br>Ученик записал текст: <br><br>"Города '
	let temp = Math.floor(Math.random() * country.length)
	outputText += country[temp] + ": "
	for(let i = 0; i < words[temp].length; i++) {
		outputText += words[temp][i] 
		if (i < words[temp].length - 1) {
			outputText += ', '
		}
		else {
			outputText += '"<br>'
		}
	}
	outputText += '<br>После этого ученик убрал из текста один из городов, а также ставшие лишними запятую и пробел. После этого размер предложения оказался на '
	const outputCorrectAnswer = words[temp][Math.floor(Math.random() * words[temp].length)]
	let kolvoBytes = (outputCorrectAnswer.length + 2) * kolvoBit / 8 
	outputText += kolvoBytes;
	if (kolvoBytes%10 == 1 && kolvoBytes%100 != 11) {
		outputText += ' байт';
	}
	else if ((kolvoBytes%10==2 && kolvoBytes%100 != 12)|| (kolvoBytes%10==3 && kolvoBytes%100 != 13) || (kolvoBytes%10==4 && kolvoBytes%100 != 14)) {
		outputText += ' байта';
	}
	else {
		outputText += ' байтов';
	}
	outputText += ' меньше чем было.<br><br>Напишите в ответе удалённое название города. Ответ должен быть с большой буквы.';
	return [outputText,outputCorrectAnswer];
}
function exerciseTypeTwo(Num) {
	const bits = [8,16,32];
	const kolvoBit = bits[Math.floor(Math.random() * 3)];
	let outputText ='<strong>' + (Num+1) + '.</strong> В одной из кодировок каждый символ кодируется ' + kolvoBit + ' битами. Определите размер в байтах следующего предложения в данной кодировке, не учитывая кавычки: ';
	const Sentence = sentences[Math.floor(Math.random() * sentences.length)];
	outputText += '"' + Sentence + '"';
	const outputCorrectAnswer = (Sentence.length * kolvoBit / 8).toString();
	return [outputText,outputCorrectAnswer];
}
let Amount = 0;
function exercise () {
	Amount = document.getElementById('exerciseAmountNum').value
	//Amount = $("#exerciseAmountNum").attr("value");
	document.getElementById('exerciseAmount').innerHTML = '';
	for (let Num = 0; Num < Amount; Num++) {
		document.getElementById('exercise1').innerHTML += '<div  style = "margin-top: 1em;" id = "example' + Num + '"></div><br><div class="form-example"><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" name="name" class="otvetPoleClass" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
		//$("#exercise1").append('<div id = "example' + Num + '"></div><br><div class="form-example"><input type="text" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="Проверить результат" /></div><div id = "otvet' + Num + '"></div><h2></h2>');
		document.getElementById('otvetPole' + Num ).value = ''
		//$("#otvetPole").attr("value","");
		document.getElementById('otvet' + Num ).innerHTML = ''
		//$("#otvet").html("");
		randomExercise = Math.floor(Math.random() * 4);
		let output = '';
		if (randomExercise == 0 || randomExercise == 1 || randomExercise == 2)  {
			output = exerciseTypeOne(Num)
		}
		else if (randomExercise == 3) {
			output = exerciseTypeTwo(Num)
			
		}
		askWord[Num] = output[1]
		//document.getElementById('example' + Num ).innerHTML += output[0]
		$("#example" + Num).append(output[0]);
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
	