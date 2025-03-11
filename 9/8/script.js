let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString;
$('#exerciseAmount').append(exerciseAmountString);






function exerciseTypeOne(Num) {
    function toHundreds(temp) {
		return temp - temp % 100;
	}
	const words = "Buick, Cadillac, Chevrolet, Chrysler, Dodge, Ford, GMC, Hummer, Jeep, Lincoln, Pontiac, Tesla, Aston Martin, Bentley, Caterham, Jaguar, Land Rover, Lotus, McLaren, Mini, Rolls-Royce, Rover, Belgee, Cupra, Seat, Abarth, Alfa Romeo, Ferrari, Fiat, Lancia, Lamborghini, Maserati, Audi, BMW, Brabus, Mercedes-Benz, Opel, Porsche, Volkswagen, Wiesmann, ГАЗ, ЗИЛ, КАМАЗ, Москвич, УАЗ, Aurus, Нива, Жигули, Ока, Волга, Чайка, Гранта, Веста, Приора, Калина, Ларгус, Evolute, Sollers, Lada, Dacia, Ravon, Skoda, Polestar, Saab, Volvo, Daewoo, Genesis, Hyundai, KIA, SsangYong, Bugatti, Citroen, Renault, Peugeot, Daihatsu, Datsun, Honda, Infiniti, Lexus, Mazda, Mitsubishi, Nissan, Scion, Subaru, Suzuki, Toyota";
	const wordsArray = words.split(", ");
	let firstWord = wordsArray[Math.floor(Math.random()*(wordsArray.length))];
	let secondWord;
	do {
		secondWord = wordsArray[Math.floor(Math.random()*(wordsArray.length))];
	} while (firstWord == secondWord);
	const minRange = 5000;
	const maxRange = 10000;
	let A = toHundreds(Math.floor(Math.random() * (maxRange - minRange) + minRange));
	let B;
	do {
		B = toHundreds(Math.floor(Math.random() * (maxRange - minRange) + minRange));
	} while (B == A);
	let A_and_B = toHundreds(Math.floor(Math.random() * (2000 - 200) + 200));
	let A_or_B = A + B - A_and_B;
	let output = "<strong>" + (Num+1) + ".</strong>" +" В языке запросов поискового сервера для обозначения логической операции «ИЛИ»  используется  символ  «|»,  а  для  обозначения  логической  операции «И» – символ «&». <br>В  таблице  приведены  запросы  и  количество  найденных  по  ним  страниц некоторого сегмента сети Интернет. ";
	output += "<div class='table_component' role='region' tabindex='0'><table><thead><tr><th>Запрос</th><th>Кол-во найденных<br>страниц (в тыс.)</th></thead>";
	let outputCorrectAnswer = 0;
	switch(Math.floor(Math.random() * 4)) {
		case 0:
			output += "<tbody><tr><td>" + firstWord + " | " + secondWord + "</td><td>" + A_or_B + "</td></tr>"; 
			output += "<tbody><tr><td>" + firstWord + " & " + secondWord + "</td><td>" + A_and_B + "</td></tr>"; 
			output += "<tbody><tr><td>" + firstWord + "</td><td>" + A + "</td></tr></tbody></table></div>";
			output +=  "<br>Какое количество страниц (в тысячах) будет найдено по запросу <strong>" + secondWord + "</strong>?";
			outputCorrectAnswer = B;
			break;
		case 1:
			output += "<tbody><tr><td>" + secondWord + "</td><td>" + B + "</td></tr>";
			output += "<tbody><tr><td>" + firstWord + " | " + secondWord + "</td><td>" + A_or_B + "</td></tr>";
			output += "<tbody><tr><td>" + firstWord + " & " + secondWord + "</td><td>" + A_and_B + "</td></tr></tbody></table></div>"; 
			output +=  "<br>Какое количество страниц (в тысячах) будет найдено по запросу <strong>" + firstWord + "</strong>?";
			outputCorrectAnswer = A;
			break;
		case 2:
			output += "<tbody><tr><td>" + firstWord + "</td><td>" + A + "</td></tr>"; 
			output += "<tbody><tr><td>" + secondWord + "</td><td>" + B + "</td></tr>";
			output += "<tbody><tr><td>" + firstWord + " | " + secondWord + "</td><td>" + A_or_B + "</td></tr></tbody></table></div>"; 
			output +=  "<br>Какое количество страниц (в тысячах) будет найдено по запросу <strong>" + firstWord + " & " + secondWord + "</strong>?";
			outputCorrectAnswer = A_and_B;
			break;
		case 3:
			output += "<tbody><tr><td>" + firstWord + "</td><td>" + A + "</td></tr>"; 
			output += "<tbody><tr><td>" + secondWord + "</td><td>" + B + "</td></tr>";
			output += "<tbody><tr><td>" + firstWord + " & " + secondWord + "</td><td>" + A_and_B + "</td></tr></tbody></table></div>"; 
			output +=  "<br>Какое количество страниц (в тысячах) будет найдено по запросу <strong>" + firstWord + " | " + secondWord + "</strong>?";
			outputCorrectAnswer = A_or_B;
			break;	
	}
	output += "<br>Считается, что все запросы выполнялись практически одновременно, так что набор  страниц,  содержащих  все  искомые  слова,  не  изменялся  за  время выполнения запросов.";
	//output += "<tbody><tr><td>" + "A | Б" + "</td><td>" + A_or_B + "</td></tr>"; 
	//output += "<tbody><tr><td>" + "A & Б" + "</td><td>" + A_and_B + "</td></tr>"; 
	//output += "<tbody><tr><td>" + "A" + "</td><td>" + A + "</td></tr>"; 
	//output += "<tbody><tr><td>" + "Б" + "</td><td>" + B + "</td></tr>";
	//output += "</tbody></table>"; 
	//output += "a = " + A + " b = " + B + " a&b = " + A_and_B + " a|b = " + A_or_B;
	let outputText = output;
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