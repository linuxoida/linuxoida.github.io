let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


document.getElementById('exerciseAmount').innerHTML += exerciseAmountString;

const typeTen = () => {
    let outputText = '';
    let outputCorrectAnswer = '';
    let randTypeTen = Math.floor(Math.random() * 5);
    if (randTypeTen === 0) {
        outputText = 'Среди приведенных ниже трех чисел, записанных в различных системах счисления, найдите ';
        const maxORmin = Math.floor(Math.random() * 2);
        if (maxORmin == 0) {
            outputText += 'минимальное';
        }
        else if (maxORmin == 1) {
            outputText += 'максимальное';
        }
        outputText += ' и запишите его в ответе в десятичной системе счисления. <br>';
        const number_1 = Math.floor(Math.random() * (100 - 30) + 30);
        const number_2 = Math.floor(Math.random() * (100 - 30) + 30);
        const number_3 = Math.floor(Math.random() * (100 - 30) + 30);
        outputText += '<div style="text-align:center;">' + number_1.toString(16).toUpperCase() + '<sub>16</sub>, ' + number_2.toString(8) + '<sub>8</sub>, ' + number_3.toString(2) + '<sub>2</sub>.</div><br>В ответе запишите только число, основание системы счисления указывать не нужно.';
        outputCorrectAnswer = 0;
        if (maxORmin == 0) {
            let minimum = number_1;
            if (number_2 < minimum) {
                minimum = number_2;
            }
            if (number_3 < minimum) {
                minimum = number_3;
            }
            outputCorrectAnswer = minimum;
        }
        else if (maxORmin == 1) {
            let maximum = number_1;
            if (number_2 > maximum) {
                maximum = number_2;
            }
            if (number_3 > maximum) {
                maximum = number_3;
            }
            outputCorrectAnswer = maximum;
        }
    } else if (randTypeTen === 1) {
        outputCorrectAnswer = Math.floor(Math.random() * (200 - 50) + 50);
        const numberSystemsArray = [2, 8, 16];
        const numberSystem = numberSystemsArray[Math.floor(Math.random() * numberSystemsArray.length)];
        outputText = `Переведите данное число в десятичную систему счисления: ${outputCorrectAnswer.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub>.<br>Запишите полученное число в ответ, систему счисления указывать не надо.`;
    } else if (randTypeTen === 2) {
        outputCorrectAnswer = Math.floor(Math.random() * (200 - 50) + 50);
        const numberSystemsArray = [8, 10, 16];
        const numberSystem = numberSystemsArray[Math.floor(Math.random() * numberSystemsArray.length)];
        outputText = `Переведите данное число в двоичную систему счисления: ${outputCorrectAnswer.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub>.<br>Запишите полученное число в ответ, систему счисления указывать не надо.`;
        outputCorrectAnswer = outputCorrectAnswer.toString(2);
    } else if (randTypeTen === 3) {
        outputCorrectAnswer = Math.floor(Math.random() * (200 - 50) + 50);
        const numberSystemsArray = [2, 10, 16];
        const numberSystem = numberSystemsArray[Math.floor(Math.random() * numberSystemsArray.length)];
        outputText = `Переведите данное число в восьмеричную систему счисления: ${outputCorrectAnswer.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub>.<br>Запишите полученное число в ответ, систему счисления указывать не надо.`;
        outputCorrectAnswer = outputCorrectAnswer.toString(8);
    } else if (randTypeTen === 4) {
        const signsArray = [`+`, `-`, `⋅`, `/`];
        const sign = signsArray[Math.floor(Math.random() * 4)];
        const numberSystemsArray = [2, 8, 16];
        const numberSystem = numberSystemsArray[Math.floor(Math.random() * numberSystemsArray.length)];
        outputText = '';
        outputCorrectAnswer = '';
        let a, b = 0;
        switch (sign) {
            case `+`:
                a = Math.floor(Math.random() * (20 - 2) + 2);
                b = Math.floor(Math.random() * (20 - 2) + 2);
                outputCorrectAnswer = parseInt(a) + parseInt(b);
                outputText = `Вычислите значение выражения ${a.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub> + ${b.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub>. Ответ запишите в десятичной системе счисления.`;
                break;
            case `-`:
                a = Math.floor(Math.random() * (20 - 2) + 2);
                b = Math.floor(Math.random() * (20 - 2) + 2);
                outputCorrectAnswer = parseInt(a) - parseInt(b);
                outputText = `Вычислите значение выражения ${a.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub> - ${b.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub>. Ответ запишите в десятичной системе счисления.`;
                break;
            case `⋅`:
                a = Math.floor(Math.random() * (16 - 2) + 2);
                b = Math.floor(Math.random() * (12 - 2) + 2);
                outputCorrectAnswer = parseInt(a) * parseInt(b);
                outputText = `Вычислите значение выражения ${a.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub> ⋅ ${b.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub>. Ответ запишите в десятичной системе счисления.`;
                break;
            case `/`:
                let result = 0;
                do {
                    a = Math.floor(Math.random() * (50 - 10) + 10);
                    b = Math.floor(Math.random() * (12 - 2) + 2);
                    result = a / b;
                } while ((result - Math.floor(result)) > 0 || result == 1);
                outputCorrectAnswer = result;
                outputText = `Вычислите значение выражения ${a.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub> ÷ ${b.toString(numberSystem).toUpperCase()}<sub>${numberSystem}</sub>. Ответ запишите в десятичной системе счисления.`;
                break;
        }
    }
    return [outputText, outputCorrectAnswer.toString()];
}

let Amount = 0;
function exercise () {
	Amount = document.getElementById('exerciseAmountNum').value
	document.getElementById('exerciseAmount').innerHTML = ''
	for (let Num = 0; Num < Amount; Num++) {
		document.getElementById('exercise1').innerHTML += '<div style = "margin-top:1em;"id = "example' + Num + '"></div><br><div class="form-example" ><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" onkeydown="if (event.keyCode == ' + 13 + '){ attempt(' + Num +');}" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
			
		document.getElementById('otvetPole' + Num ).value = ''
		document.getElementById('otvet' + Num ).innerHTML = ''
		let output = '';
		output = typeTen(Num);
		askWord[Num] = output[1]
		document.getElementById('example' + Num ).innerHTML += `<strong>${Num + 1}.</strong> ${output[0]}`;
		
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