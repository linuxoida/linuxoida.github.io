let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString;
$('#exerciseAmount').append(exerciseAmountString);






function exerciseTypeOne(Num) {
    let output = "В языке запросов поискового сервера для обозначения логической операции «ИЛИ»  используется  символ  «|»,  а  для  обозначения  логической  операции «И» – символ «&». <br>В  таблице  приведены  запросы  и  количество  найденных  по  ним  страниц некоторого сегмента сети Интернет. ";
    let outputText = output;
    let outputCorrectAnswer = 1;
	return [outputText,outputCorrectAnswer.toString()];
}








let Amount = 0;
function exercise () {
	Amount = document.getElementById('exerciseAmountNum').value
	document.getElementById('exerciseAmount').innerHTML = ''
	for (let Num = 0; Num < Amount; Num++) {
		document.getElementById('exercise1').innerHTML += '<div style = "margin-top:1em;"id = "example' + Num + '"></div><br><div class="form-example" ><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" onkeydown="if (event.keyCode == ' + 13 + '){ attempt(' + Num +');}" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
			
		document.getElementById('otvetPole' + Num ).value = ''
		document.getElementById('otvet' + Num ).innerHTML = ''
		//randomExercise = Math.floor(Math.random() * 3);
		let output = '';
		//if (randomExercise == 0 || randomExercise == 1 || randomExercise == 2)  {
			output = exerciseTypeOne(Num)
		//}
		//else if (randomExercise == 3) {
		//	output = exerciseTypeTwo(Num)
			
		//}
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