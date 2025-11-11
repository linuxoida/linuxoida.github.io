let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString
$("#exerciseAmount").html(exerciseAmountString);
function exerciseTypeOne(Num) {
    const outputCorrectAnswer = Math.floor(Math.random() * (200 - 50) + 50);
    const numberSystemsArray = [16];
    const numberSystem = numberSystemsArray[Math.floor(Math.random() * numberSystemsArray.length)];
    let outputText = `<strong>${Num+1}.</strong>. Переведите данное число в десятичную систему счисления: ${outputCorrectAnswer.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub>.<br>Запишите полученное число в ответ, систему счисления указывать не надо.`;
    return [outputText, outputCorrectAnswer.toString()];
}
function exerciseTypeTwo(Num) {
    const outputCorrectAnswer = Math.floor(Math.random() * (200 - 50) + 50);
    const numberSystemsArray = [10];
    //const numberSystemsArray = [8, 10, 16];
    const numberSystem = numberSystemsArray[Math.floor(Math.random() * numberSystemsArray.length)];
    let outputText = `<strong>${Num+1}.</strong>. Есть десятичное число ${outputCorrectAnswer.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub>.<br>Переведите его в шестнадцатеричный формат, систему счисления указывать не надо.`;
    return [outputText, outputCorrectAnswer.toString(16)];
}
let Amount = 0;
function exercise () {
	Amount = document.getElementById('exerciseAmountNum').value
	//Amount = $("#exerciseAmountNum").attr("value");
	document.getElementById('exerciseAmount').innerHTML = '';
	for (let Num = 0; Num < Amount; Num++) {
		document.getElementById('exercise1').innerHTML += '<div  style = "margin-top: 1em;" id = "example' + Num + '"></div><br><div class="form-example"><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" name="name" onkeydown="if (event.keyCode == ' + 13 + '){ attempt(' + Num +');}" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
		//$("#exercise1").append('<div id = "example' + Num + '"></div><br><div class="form-example"><input type="text" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="Проверить результат" /></div><div id = "otvet' + Num + '"></div><h2></h2>');
		document.getElementById('otvetPole' + Num ).value = ''
		//$("#otvetPole").attr("value","");
		document.getElementById('otvet' + Num ).innerHTML = ''
		//$("#otvet").html("");
		randomExercise = Math.floor(Math.random() * 2);
		let output = '';
		if (randomExercise == 0)  {
			output = exerciseTypeOne(Num);
		} else if (randomExercise == 1) {
			output = exerciseTypeTwo(Num);
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

	
