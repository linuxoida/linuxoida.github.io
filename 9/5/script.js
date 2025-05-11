let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString;
$('#exerciseAmount').append(exerciseAmountString);

const typeFive = () => {
    function commandNumber(command) {
        let number = 0;
        if (command == 'Прибавь') {
            number = Math.floor(Math.random() * (10 - 2) + 2);
        } else if (command == 'Вычти') {
            number = Math.floor(Math.random() * (10 - 2) + 2);
        } else if (command == 'Умножь на') {
            number = Math.floor(Math.random() * (4 - 2) + 2);
        } else if (command == 'Раздели на') {
            number = Math.floor(Math.random() * (4 - 2) + 2);
        }
        return number;
    }
    function generateSecondNumber(commands, firstNumber, firstCommand, firstCommandNumber, secondCommand, secondCommandNumber) {
        let secondNumber = firstNumber;
        //let table = `<br><table><tbody>`;
        for (let i = 0; i < commands.length; i++) {
            if (commands[i] == '1') {
                if (firstCommand == 'Прибавь') {
                    secondNumber += firstCommandNumber;
                } else if (firstCommand == 'Вычти') {
                    secondNumber -= firstCommandNumber;
                } else if (firstCommand == 'Умножь на') {
                    secondNumber *= firstCommandNumber;
                } else if (firstCommand == 'Раздели на') {
                    secondNumber /= firstCommandNumber;
                } else if (firstCommand == 'Возведи в квадрат') {
                    secondNumber = secondNumber ** 2;
                }
                //table += `<tr><td>${firstCommand} ${firstCommandNumber} |</td><td>${commands[i]} |</td><td>${secondNumber}</td></tr>`;
            } else if (commands[i] == '2') {
                if (secondCommand == 'Прибавь') {
                    secondNumber += secondCommandNumber;
                } else if (secondCommand == 'Вычти') {
                    secondNumber -= secondCommandNumber;
                } else if (secondCommand == 'Умножь на') {
                    secondNumber *= secondCommandNumber;
                } else if (secondCommand == 'Раздели на') {
                    secondNumber /= secondCommandNumber;
                } else if (secondCommand == 'Возведи в квадрат') {
                    secondNumber = secondNumber ** 2;
                }
                //table += `<tr><td>${secondCommand} ${secondCommandNumber} |</td><td>${commands[i]} |</td><td>${secondNumber}</td></tr>`;
            }
        }
        //table += `</tbody></table>`;
        //return [secondNumber, ` ${table}`];
        return secondNumber;
    }
    let commandsBank = ['Прибавь', 'Вычти', 'Умножь на', 'Раздели на', 'Возведи в квадрат'];
    let firstCommand = '';
    let secondCommand = '';
    let firstCommandNumber;
    let secondCommandNumber;
    let commands = [];
    let firstNumber;
    const isSameChars = str => { //проверка на то что строка состоит из одинаковых символов
        if (!str || typeof str !== 'string') return false; // Преобразуем строку в массив символов
        const charsArray = Array.from(str); // Проверяем, совпадает ли каждый символ с первым символом строки
        return charsArray.every(char => char === charsArray[0]);
    };
    let result = 0;
    do {
        firstCommand = commandsBank[Math.floor(Math.random() * commandsBank.length)];
        do {
            secondCommand = commandsBank[Math.floor(Math.random() * commandsBank.length)];
        } while (secondCommand == firstCommand);
        firstCommandNumber = commandNumber(firstCommand);
        do {
            secondCommandNumber = commandNumber(secondCommand);
        } while (firstCommandNumber == secondCommandNumber);
        firstNumber = Math.floor(Math.random() * (15 - 5) + 5);
        do {
            commands = [];
            for (let i = 0; i < 5; i++) {
                commands += Math.floor(Math.random() * 2 + 1)
            }
        } while (isSameChars(commands));
        result = generateSecondNumber(commands, firstNumber, firstCommand, firstCommandNumber, secondCommand, secondCommandNumber);
    } while (result > 500 || result < -500 || !Number.isInteger(result));
    const robotNameBank = ['Альфа', 'Бета', 'Гамма', 'Дельта', 'Эпсилон',
        'Йота', 'Лямбда', 'Омикрон', 'Сигма', 'Омега', 'Aphex', 'Техник',
        'Боб', 'Джонни', 'Чарли', 'Алекс', 'Дебби', 'Джимми', 'Молли',
        'Паша', 'Саша', 'Чобот', 'Чопикс', 'Максон'
    ];
    const robotName = robotNameBank[Math.floor(Math.random() * robotNameBank.length)];
    let outputCorrectAnswer = 0;
    const questionSignBank = ['a', 'b', 'x', 'v', 'A', 'B', 'X', 'Z', 'V'];
    const questionSign = questionSignBank[Math.floor(Math.random() * questionSignBank.length)];
    if (firstCommand === 'Возведи в квадрат') {
        outputCorrectAnswer = secondCommandNumber;
        secondCommandNumber = `<i>${questionSign}</i>`;
    } else if (secondCommand === 'Возведи в квадрат') {
        outputCorrectAnswer = firstCommandNumber;
        firstCommandNumber = `<i>${questionSign}</i>`;
    } else {
        let temp = Math.floor(Math.random() * 2);
        if (temp === 0) {
            outputCorrectAnswer = firstCommandNumber;
            firstCommandNumber = `<i>${questionSign}</i>`;
        } else {
            outputCorrectAnswer = secondCommandNumber;
            secondCommandNumber = `<i>${questionSign}</i>`;
        }
    }
    let outputText = `У исполнителя ${robotName} есть две команды:
        <br>&emsp; 1. <b>${(firstCommand == 'Возведи в квадрат') ? firstCommand : firstCommand + ' ' + firstCommandNumber}</b>
        <br>&emsp; 2. <b>${(secondCommand == 'Возведи в квадрат') ? secondCommand : secondCommand + ' ' + secondCommandNumber}</b>
        <br>(<i>${questionSign}</i> — неизвестное натуральное число; <i>${questionSign}</i> ≥ 2).<br>`;

    if (firstCommand == 'Прибавь') {
        outputText += `Первая из них увеличивает число на экране на ${firstCommandNumber}, `;
    } else if (firstCommand == 'Вычти') {
        outputText += `Первая из них уменьшает число на экране на ${firstCommandNumber}, `;
    } else if (firstCommand == 'Умножь на') {
        outputText += `Первая из них умножает число на экране на ${firstCommandNumber}, `;
    } else if (firstCommand == 'Раздели на') {
        outputText += `Первая из них делит число на экране на ${firstCommandNumber}, `;
    } else if (firstCommand == 'Возведи в квадрат') {
        outputText += `Первая из них возводит число на экране во вторую степень, `;
    }
    if (secondCommand == 'Прибавь') {
        outputText += `а вторая увеличивает это число на ${secondCommandNumber}.`;
    } else if (secondCommand == 'Вычти') {
        outputText += `а вторая уменьшает это число на ${secondCommandNumber}.`;
    } else if (secondCommand == 'Умножь на') {
        outputText += `а вторая умножает это число на ${secondCommandNumber}.`;
    } else if (secondCommand == 'Раздели на') {
        outputText += `а вторая делит это число на ${secondCommandNumber}.`;
    } else if (secondCommand == 'Возведи в квадрат') {
        outputText += `а вторая возводит это число во вторую степень.`;
    }
    outputText += `<br>Программа для исполнителя ${robotName}  — это последовательность номеров команд.
        <br>Известно, что программа ${commands} переводит число ${firstNumber} в число ${result}.
        Определите значение <i>${questionSign}</i>.`;

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
		output = typeFive(Num);
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