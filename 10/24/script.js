let askWord = [];


function logicalExpression(x,signLeft,left,signRight,right,evenOrOdd) {
    let LeftExpression = false;
    let RightExpression = false;
    switch (signLeft) {
        case ">":
            LeftExpression = x > left;
            break;
        case "<":
            LeftExpression = x < left;
            break;
        case "≥":
            LeftExpression = x >= left;
            break;
        case "≤":
            LeftExpression = x <= left;
            break;
    }
    switch (signRight) {
        case ">":
            RightExpression = x > right;
            break;
        case "<":
            RightExpression = x < right;
            break;
        case "≥":
            RightExpression = x >= right;
            break;
        case "≤":
            RightExpression = x <= right;
            break;
    }
    if (evenOrOdd) {
        switch (evenOrOdd) {
            case 'чётное':
                return LeftExpression && RightExpression && x % 2 == 0;
            case 'нечётное':
                return LeftExpression && RightExpression && x % 2 == 1;
        }
    }
    else {
        return LeftExpression && RightExpression;
    }
}




function exerciseTypeOne(Num, evenCheck = false) {
    right = Math.floor(Math.random() * (100 - 10) + 10);
    left = Math.floor(Math.random()*(right-2));
    let outputText = "<strong>" + (Num+1) + ".</strong> " +"Укажите в ответе ";
    let MinOrMax = '';
    if(Math.floor(Math.random()*2)) {
        outputText += "наименьшее";
        MinOrMax = false;
    }
    else {
        outputText += "наибольшее";
        MinOrMax = true;
    }
    outputText += " натуральное число, для которого подходит это выражение:<br>";
    const signs = ['>','<','≥','≤'];
    const randNot = ['',''];
    const randEvenOdd = ['чётное','нечётное'];
    let temp = false;
    let outputCorrectAnswer = '';
    let signLeft;
    let signRight;
    let evenOrOdd;
    //этот цикл - костыль, он генерирует до тех пор пока не будет решаемое выражение
    //нужно сделать так чтобы не выходило подобное: (x <= 15) и (x > 18); (x < 18) и не (x <= 33); (x <= 20) и (x >= 27)
    while (!temp) {
        notLeft = randNot[Math.floor(Math.random()*2)];
        notRight = randNot[Math.floor(Math.random()*2)];
        signLeft = signs[Math.floor(Math.random()*4)];
        signRight = signs[Math.floor(Math.random()*4)];
        if (evenCheck) evenOrOdd = randEvenOdd[Math.floor(Math.random() * 2)];
        if (MinOrMax) {
            for (let i = 0; i <= 100; i++) {
                if (evenCheck) {
                    if (logicalExpression(i,signLeft,left,signRight,right,evenOrOdd)) {
                        outputCorrectAnswer = i;
                    }
                }
                else {
                    if (logicalExpression(i,signLeft,left,signRight,right)) {
                        outputCorrectAnswer = i;
                    }
                }
            }
        }
        else {
            for (let i = 100; i >= 0; i--) {
                if (evenCheck) {
                    if (logicalExpression(i,signLeft,left,signRight,right,evenOrOdd)) {
                        outputCorrectAnswer = i;
                    }
                }
                else {
                    if (logicalExpression(i,signLeft,left,signRight,right)) {
                        outputCorrectAnswer = i;
                    }
                }
            }
        }
        if (outputCorrectAnswer >= 1 && outputCorrectAnswer <= 99) {
            temp = true;
        }
    }
    outputText += "<div style = 'margin-top:0.5em;text-align:center;'>" + notLeft + "(Число " + signLeft + " " + left + ") и " + notRight + '(Число ' + signRight + " " + right + ")";
    if (evenCheck) {
        if (evenOrOdd == 'чётное') {
            outputText += " и (Число чётное)";
        }
        else if (evenOrOdd == 'нечётное') {
            outputText += " и (Число нечётное)";
        }
    }
    outputText += " = Истина</div>";
    //outputText += "<br>" + outputCorrectAnswer;
    
	return [outputText,outputCorrectAnswer.toString()];
}
function logicalExpressionTwo(notA,A,firstSign,notB,B) {
    if (notA === '¬') {
        A = !A;
    }
    if(notB === '¬') {
        B = !B;
    }
    switch (firstSign) {
        case '+': 
            return A || B;
        case '⋅':
            return A && B;
        default:
            return false;
    }
}
function exerciseTypeTwo(Num) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let letter1 = alphabet[Math.floor(Math.random() * alphabet.length)];
    let letter2;
    do {
        letter2 = alphabet[Math.floor(Math.random() * alphabet.length)];
    } while (letter1 === letter2);
    let outputText = "<strong>" + (Num+1) + ".</strong> Сколько решений может иметь данное уравнение:<br>";
    const randNot = ["","¬"];
    const notA = randNot[Math.floor(Math.random() * 2)];
    const notB = randNot[Math.floor(Math.random() * 2)];
    const signs = ['+','⋅'];
    const sign = signs[Math.floor(Math.random() * 2)];
    const result = Math.floor(Math.random() * 2);
    outputText += "<div style = 'margin-top:0.5em;text-align:center;font-size:1.5em;'>" + notA + '' + letter1 + ' ' + sign + ' ' + notB + '' + letter2 + " = " + result+ "</div>";
    let outputCorrectAnswer = 0;
    for (let i = 0; i <= 1; i++) {
        for (let j = 0; j <= 1; j++) {
            if (logicalExpressionTwo(notA,i,sign,notB,j) == result) {
                outputCorrectAnswer++;
            }
        }
    }
    return [outputText,outputCorrectAnswer.toString()];
}

let Amount = 5;

function exercise () {
    document.getElementById('start').style.display = "none";
    document.getElementById('exercise1').innerHTML += '<h2 style = "text-align: center;">1 часть</h2>';
    let Num = 0;
	for (; Num < Amount; Num++) {
		document.getElementById('exercise1').innerHTML += '<div style = "margin-top:1em;"id = "example' + Num + '"></div><br><div class="form-example" ><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" onkeydown="if (event.keyCode == ' + 13 + '){ attempt(' + Num +');}" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
			
		document.getElementById('otvetPole' + Num ).value = '';
		document.getElementById('otvet' + Num ).innerHTML = '';
		let output = '';
		output = exerciseTypeOne(Num);
		askWord[Num] = output[1];
		document.getElementById('example' + Num ).innerHTML += output[0];
		
	}
	document.getElementById('exercise1').innerHTML += '<h2 style = "text-align: center;">2 часть</h2>';
    for (; Num < (Amount*2); Num++) {
		document.getElementById('exercise1').innerHTML += '<div style = "margin-top:1em;"id = "example' + Num + '"></div><br><div class="form-example" ><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" onkeydown="if (event.keyCode == ' + 13 + '){ attempt(' + Num +');}" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
			
		document.getElementById('otvetPole' + Num ).value = '';
		document.getElementById('otvet' + Num ).innerHTML = '';
		let output = '';
		output = exerciseTypeOne(Num, true);
		askWord[Num] = output[1];
		document.getElementById('example' + Num ).innerHTML += output[0];
		
	}
    document.getElementById('exercise1').innerHTML += '<h2 style = "text-align: center;">3 часть</h2>';
    for (; Num < (Amount*3); Num++) {
		document.getElementById('exercise1').innerHTML += '<div style = "margin-top:1em;"id = "example' + Num + '"></div><br><div class="form-example" ><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" onkeydown="if (event.keyCode == ' + 13 + '){ attempt(' + Num +');}" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
			
		document.getElementById('otvetPole' + Num ).value = '';
		document.getElementById('otvet' + Num ).innerHTML = '';
		let output = '';
		output = exerciseTypeTwo(Num);
		askWord[Num] = output[1];
		document.getElementById('example' + Num ).innerHTML += output[0];
		
	}
}
let correct = [];
let incorrect = [];
for (let i = 0; i < 100; i++ ) {
	correct[i] = 0;
	incorrect[i] = 0;
}
let timeLeft = 600;
let timerId;
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
				correctCounter += correct[i];
		}
		for (let i = 0; i < incorrect.length; i++ ) {
				incorrectCounter += incorrect[i];
		}
        if (correctCounter == (Amount*3)) {
            timeLeft = 1;
        }
		document.getElementById('counter').innerHTML = 'Правильных ответов: ' + correctCounter + ', неправильных: ' + incorrectCounter;
		percent = ((correctCounter/(Amount*3))*100).toFixed(2);
		document.getElementById('counter').innerHTML += ' <br>Процент правильных ответов: ' + percent + '% ';
		
}


function startTimer() {
    document.getElementById("timer").style.display = "block";
    timerId = setInterval(function() {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("timeLeft").innerText = ": " + minutes + ":" + seconds;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            
            
            document.getElementById("timeLeft").innerText = " вышло";
            let correctCounter = 0;
            let incorrectCounter = 0;
            for (let i = 0; i < correct.length; i++ ) {
                    correctCounter += correct[i]
            }
            for (let i = 0; i < incorrect.length; i++ ) {
                    incorrectCounter += incorrect[i]
            }
            percent = ((correctCounter/(Amount*3))*100).toFixed(2);
            if (percent > 70) {
                alert("Ваша оценка: 5, вы ответили правильно на " + percent + "% заданий");
                document.getElementById("timer").style.color = "green";
                document.getElementById('timer').innerHTML = "Оценка: 5";
            }
            else if (percent > 50) {
                alert("Ваша оценка: 4, вы ответили правильно на " + percent + "% заданий");
                document.getElementById("timer").style.color = "green";
                document.getElementById('timer').innerHTML = "Оценка: 4";
            }
            else if (percent > 30) {
                alert("Ваша оценка: 3, вы ответили правильно на " + percent + "% заданий");
                document.getElementById("timer").style.color = "orange";
                document.getElementById('timer').innerHTML = "Оценка: 3";
            }
            else {
                alert("Ваша оценка: 2, вы ответили правильно на " + percent + "% заданий");
                document.getElementById("timer").style.color = "red";
                document.getElementById('timer').innerHTML = "Оценка: 2";
            }
            document.getElementById("container").style.pointerEvents = 'none';
            $(window).resize(function() {
                document.getElementById("container").style.pointerEvents = 'none';
            });
        }
    }, 1000);        
}